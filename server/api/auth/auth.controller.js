var jwt = require('jsonwebtoken');

const users = [
  {
    login: 'Den',
    password: '123',
    admin: true
  },
  {
    login: 'NeDen',
    password: '321',
    admin: false
  }
]

const tokenOptions = {
  expiresIn: '5m'
}

module.exports.signin = (req, res, next) => {

  var user = users.find(userInArray => req.body.login === userInArray.login);

  // if user was not found or password is incorrect
  if (typeof user === 'undefined' || user.password !== req.body.password) {
    res.json({
      success: false,
      message: 'Incorrect Login or Password'
    });
    return;
  }

  // we have a match

  // token data
  const payload = {
    login: user.login,
    admin: user.admin
  };

  const secret = req.app.get('secret');

  // create token
  const token = jwt.sign(payload, secret, tokenOptions);

  // send token to client
  res.json({
    success: true,
    token
  });
  
}

module.exports.validateToken = (req, res, next) => {

  if (req.body.token){
    jwt.verify(req.body.token, req.app.get('secret'), function(err, decoded) {

      if (err) {
        return res.json({
          success: false,
          message: 'Failed to authenticate token.'
        });
      } else {
        return res.json({ 
          success: true,
          // refreshed token
          token: jwt.sign({
            login: decoded.login,
            admin: decoded.admin
          }, req.app.get('secret'), tokenOptions)
        });
      }

    });
  } else {
    return next({name: 'UnauthorizedError'});    
  }

}