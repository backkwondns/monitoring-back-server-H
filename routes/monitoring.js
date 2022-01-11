const express = require('express');
const fromDB = require('../libs/fromDB');
const { listLen } = require('../libs/redis/get');
const { configFan } = require('../libs/configFan');
const route = express.Router();

route.get('/last', async (req, res) => {
  res.send(await fromDB.lastFromDB());
});

route.get('/multi', async (req, res) => {
  res.send(await fromDB.multiFromDB());
});

route.post('/fan', async (req, res) => {
  try {
    await configFan(req.body.value);
  } catch (error) {
    res.status(500).send(error);
  }
  res.send('Complete!');
});

// route.get('/clear', async (req, res) => {
//   try {
//     await fromDB.clearOldDB();
//   } catch (error) {
//     res.status(500).send(error);
//   }
//   res.status(200).send('Cleared');
// });
module.exports = route;
