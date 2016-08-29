require('./order.model');

var router = require('express').Router();
var controller = require('./order.controller');

router.route('/')
  .post(controller.create)
  .get(controller.getAll)

module.exports = router;
