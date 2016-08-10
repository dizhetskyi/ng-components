// var config = require('./server/config/config');
var app = require('./server');

var port = 3663;

app.listen(port);
console.log('listening on http://localhost:' + port);