var router = require('express').Router();
var controller = require('./auth.controller');

router.post('/signin', controller.signin)
router.post('/validateToken', controller.validateToken)

module.exports = router;
