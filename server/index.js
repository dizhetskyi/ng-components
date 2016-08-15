var express = require('express');

var api = require('./api');
// var auth = require('./api/auth/authRoutes');
// var config = require('./config/config');

var app = express();

app.set('secret', 'ololotrololo');

// var mongoose = require('mongoose')
// mongoose.Promise = Promise;
// mongoose.connect(config.db.url);

require('./middleware/app.middleware')(app);

app.use('/api', api);

// app.use(require('errorHandler')());

module.exports = app;