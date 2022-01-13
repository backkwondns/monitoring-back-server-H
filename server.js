const express = require('express');
const morgan = require('morgan');
const { toDB, register } = require('./libs/toDB');
const cors = require('cors');
const routerMonitor = require('./routes/monitoring');
const routerLogin = require('./routes/login');
const app = express();

require('dotenv').config();

const USERNAME = process.env.USERNAME;
const PASSWORD = process.env.PASSWORD;

register(USERNAME, PASSWORD);
setInterval(() => toDB(), 10000);

app.listen(3000);
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

app.use('/monitor', routerMonitor);
app.use('/login', routerLogin);
