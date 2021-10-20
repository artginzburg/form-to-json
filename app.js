const express = require('express');
const axios = require('axios');

const app = express();

const host = 'https://exchange.rick.ai';

const urls = {
  create: `${host}/transactions/tur-na-kolskiy-ru/create`,
  update: `${host}/transactions/tur-na-kolskiy-ru/update`,
  lead: `${host}/webhooks/tur-na-kolskiy-ru/lead`,
  check: `${host}/transactions/tur-na-kolskiy-ru/check`,
};

app.use(express.urlencoded({ extended: true }));

app.post('/:type', async (req, res) => {
  const { body } = req;

  try {
    if (!body || !Object.keys(body).length) {
      return res.sendStatus(400);
    }

    await axios({
      method: 'post',
      url: urls[req.params.type],
      data: body,
    });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

module.exports.endpoint = app;
