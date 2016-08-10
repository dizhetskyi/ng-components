var express = require('express');

// var api = require('./api/api');
// var auth = require('./api/auth/authRoutes');
// var config = require('./config/config');

var app = express();

// app.set('secret', 'ololotrololo');

// var mongoose = require('mongoose')
// mongoose.Promise = Promise;
// mongoose.connect(config.db.url);

require('./middleware/app.middleware')(app);

const users = [
  {
    login: "Den",
    password: "123"
  }
]

app.post('/login', (req, res) => {
  
  users.forEach(u => {
    if (u.login !== req.body.login || u.password !== req.body.password){
      res.json({
        success: false,
        message: 'invalid username or password'
      })
    } else {
      res.json({
        success: true,
        token: 'ololo'
      })
    }

  })

})

// app.use('/api', api);
// app.use('/auth', auth);

// app.use(require('errorHandler')());

module.exports = app;