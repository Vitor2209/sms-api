const express = require('express');
const smsRoutes = require('./routes/sms.routes');

const app = express();

app.use(express.json());
app.use('/api',smsRoutes);

module.exports = app;
