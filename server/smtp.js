const { SMTPServer } = require('smtp-server');
const { simpleParser } = require('mailparser');
const config = require('./config');
const logger = require('./logger');

function startSMTP(mailboxes) {
    const smtpServer = new SMTPServer({
        authOptional: true,
        onData(stream, session, callback) {
            simpleParser(stream)
                .then(parsed => {
                    const recipient = parsed.to && parsed.to.value && parsed.to.value[0] && parsed.to.value[0].address;
                    const subject = parsed.subject || '';
                    const from = parsed.from && parsed.from.text ? parsed.from.text : '';
                    const body = parsed.text || '';
                    if (!recipient) return callback();
                    if (!mailboxes[recipient]) {
                        mailboxes[recipient] = { emails: [], createdAt: Date.now() };
                    }
                    mailboxes[recipient].emails.push({ subject, from, body });
                    callback();
                })
                .catch(err => callback(err));
        }
    });
    smtpServer.listen(config.SMTP_PORT, () => {
        logger.info(`SMTP server listening on port ${config.SMTP_PORT}`);
    });
}

module.exports = { startSMTP }; 