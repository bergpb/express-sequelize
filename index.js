const express = require('express');
const bodyParser = require('body-parser');
var routes = require('./routes/index');
const morgan = require('morgan');

const app = express();
var router = express.Router();

app.use(morgan('combined'));
app.use(bodyParser.json());

var linksRouter = require('./routes/link');
var usersRouter = require('./routes/user');
app.use('/users', usersRouter);
app.use('/links', linksRouter);

app.use('/', router);

app.listen(3000);