const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');
const config = require('./config');
const logger = require('./logger');

const app = express();

app.use(helmet());
app.use(express.json({ limit: '100kb' }));
app.use(morgan('combined', { stream: { write: msg => logger.info(msg.trim()) } }));
app.use(cors({ origin: config.ALLOWED_ORIGINS, credentials: true }));
app.disable('x-powered-by');

// Health check endpoint
app.get('/health', (req, res) => res.status(200).json({ status: 'ok' }));

module.exports = app; 