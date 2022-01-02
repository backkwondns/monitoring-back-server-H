const express = require('express');
const morgan = require('morgan');
const fromDB = require('./libs/fromDB');
const toDB = require('./libs/toDB');
const app = express();

app.listen(3000);
app.use(morgan('dev'));

setInterval(() => toDB(), 10000);
// fromDB.lastData('CPU_AVG').then(value => console.log(value));
app.get('/', async (req, res) => {
  res.send(await fromDB());
});
