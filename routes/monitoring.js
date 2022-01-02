const express = require('express');
const fromDB = require('../libs/fromDB');
const { listLen } = require('../libs/redis/get');

const route = express.Router();

route.get('/last', async (req, res) => {
  res.send(await fromDB.lastFromDB());
});

route.get('/multi', async (req, res) => {
  res.send(await fromDB.multiFromDB());
});

route.get('/clear', async (req, res) => {
  try {
    await fromDB.clearOldDB();
  } catch (error) {
    res.status(500).send(error);
  }
  res.status(200).send('Cleared');
});
module.exports = route;
