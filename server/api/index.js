var router = require('express').Router();

router.use('/auth', require('./auth/auth.router'));
router.use('/order', require('./order/order.router'));

module.exports = router;
