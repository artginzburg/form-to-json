const express = require('express');

const app = require('./app').endpoint;

const { PORT = 3000 } = process.env;

app.use(express.json());

app.post('/test', (req, res) => {
  console.log('AXIOS sent a request:', req.body);
  res.sendStatus(200);
});

app.listen(PORT, () => {
  console.log(`Converter listening on http://localhost:${PORT} !`);
});
