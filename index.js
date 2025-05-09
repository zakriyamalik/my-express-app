const express = require('express');
const app = express();
const serverless = require('serverless-http'); 

app.get('/', (req, res) => {
  res.send('Hello from Express on Vercel!');
});

module.exports = app;
module.exports.handler = serverless(app);
