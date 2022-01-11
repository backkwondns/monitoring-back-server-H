const express = require('express');
const morgan = require('morgan');
const toDB = require('./libs/toDB');
const cors = require('cors');
const routerMonitor = require('./routes/monitoring');

const app = express();

app.listen(3000);
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
setInterval(() => toDB(), 10000);

app.use('/monitor', routerMonitor);
