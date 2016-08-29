var credentials = require('./dbCredentials');

module.exports = {
  dbUrl: `mongodb://${credentials.username}:${credentials.password}@ds013260.mlab.com:13260/baraholka`
}