const express = require('express');
const morgan = require('morgan');
const toDB = require('./libs/toDB');
const routerMonitor = require('./routes/monitoring')

const app = express();

app.listen(3000);
app.use(morgan('dev'));

setInterval(() => toDB(), 10000);

app.use('/monitor', routerMonitor)