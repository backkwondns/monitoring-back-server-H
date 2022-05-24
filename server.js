const express = require('express');
const morgan = require('morgan');
const { toDB, register } = require('./libs/toDB');
const cors = require('cors');
const routerMonitor = require('./routes/monitoring');
const routerLogin = require('./routes/login');
const path = require('path');
const app = express();

require('dotenv').config();

const USERNAME = process.env.USERNAME;
const PASSWORD = process.env.PASSWORD;

register(USERNAME, PASSWORD);
setInterval(() => toDB(), 10000);

app.listen(4000);
app.use(morgan('common'));
app.use(cors({origin:"http://localhost:4000",credentials:true}));
app.use(express.json());

app.use('/monitor', routerMonitor);
app.use('/login', routerLogin);

app.use(express.static(path.join(__dirname, '/build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '/build/index.html'));
});
app.get('*', function (req,res) {
  res.sendFile(path.join(__dirname, '/build/index.html'));
});
