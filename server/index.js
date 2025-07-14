const app = require('./app');
const config = require('./config');
const logger = require('./logger');
const { startSMTP } = require('./smtp');

// In-memory store for emails and expiry
const mailboxes = {};

// API routes
app.post('/api/generate', (req, res) => {
    const random = Math.random().toString(36).substring(2, 10);
    const email = `${random}@momail.in`;
    mailboxes[email] = {
        emails: [],
        createdAt: Date.now()
    };
    res.json({ email });
});

app.get('/api/inbox/:email', (req, res) => {
    const email = req.params.email;
    const mailbox = mailboxes[email];
    if (!mailbox) return res.json({ emails: [] });
    if (Date.now() - mailbox.createdAt > config.EMAIL_LIFESPAN_MS) {
        delete mailboxes[email];
        return res.json({ emails: [] });
    }
    res.json({ emails: mailbox.emails });
});

// Only allow simulate email endpoint in non-production environments
if (process.env.NODE_ENV !== 'production') {
    app.post('/api/inbox/:email', (req, res) => {
        const email = req.params.email;
        const { subject, from, body } = req.body;
        if (!mailboxes[email]) return res.status(404).json({ error: 'Mailbox not found or expired' });
        if (Date.now() - mailboxes[email].createdAt > config.EMAIL_LIFESPAN_MS) {
            delete mailboxes[email];
            return res.status(410).json({ error: 'Mailbox expired' });
        }
        mailboxes[email].emails.push({ subject, from, body });
        res.json({ success: true });
    });
} else {
    app.post('/api/inbox/:email', (req, res) => {
        res.status(403).json({ error: 'Simulate email endpoint is disabled in production.' });
    });
}

// Periodic cleanup of expired mailboxes
setInterval(() => {
    const now = Date.now();
    for (const email in mailboxes) {
        if (now - mailboxes[email].createdAt > config.EMAIL_LIFESPAN_MS) {
            delete mailboxes[email];
        }
    }
}, 60 * 1000);

// Centralized error handler
app.use((err, req, res, next) => {
    logger.error(err.stack || err);
    res.status(500).json({ error: 'Internal Server Error' });
});

// Start servers
app.listen(config.PORT, () => {
    logger.info(`Express server running on http://localhost:${config.PORT}`);
});
startSMTP(mailboxes); 