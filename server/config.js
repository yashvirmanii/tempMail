require('dotenv').config();

module.exports = {
    PORT: process.env.PORT || 5000,
    SMTP_PORT: process.env.SMTP_PORT || 2525,
    EMAIL_LIFESPAN_MS: parseInt(process.env.EMAIL_LIFESPAN_MS, 10) || 13 * 60 * 1000,
    ALLOWED_ORIGINS: (process.env.ALLOWED_ORIGINS || '*').split(',')
}; 