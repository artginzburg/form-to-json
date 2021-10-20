const express = require('express');
const axios = require('axios');

const config = require('./config');

const app = express();

app.use(express.urlencoded({ extended: true }));

app.post('/', async (req, res) => {
  const { body } = req;

  try {
    if (!body || !Object.keys(body).length) {
      return res.sendStatus(400);
    }

    await axios({
      method: 'post',
      url: config.url,
      data: body,
    });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

module.exports = app;
