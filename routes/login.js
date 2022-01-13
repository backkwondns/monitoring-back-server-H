const express = require('express');
const fromDB = require('../libs/fromDB');
const { listLen } = require('../libs/redis/get');
const { configFan } = require('../libs/configFan');
const toDB = require('../libs/toDB');
const route = express.Router();
const jwt = require('jsonwebtoken');

route.post('/auth', async (req, res) => {
  try {
    const result = await fromDB.compareAuth(req.body.id, req.body.password);
    if (result) {
      res.status(200).json({ token: jwt.sign({ id: req.body.id }, process.env.SECRET_TOKEN, { expiresIn: '10m' }) });
    } else {
      res.status(400).json({ message: 'invalid access' });
    }
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

route.post('/getSetting', async (req, res) => {
  const result = await fromDB.getSetting(req.body.id);
  res.send(result);
});

route.post('/updateSelected', (req, res) => {
  toDB.updateSelected(req.body.id, req.body.key, req.body.value);
  res.send('done');
});

route.post('/updateList', (req, res) => {
  toDB.updateList(req.body.id, req.body.list);
  res.send('done');
});
module.exports = route;
