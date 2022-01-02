const express = require('express');
const morgan = require('morgan');
const infoCollection = require('./libs/aggregateInfo');
const app = express();

app.listen(3000);
app.use(morgan('dev'));

const getInfo = async () => {
  const infos = await infoCollection()
  console.log(infos)
}

getInfo()
