var Order = require('mongoose').model('Order');

module.exports.create = function(req, res) {

  Order.create(req.body)
    .then((order)=>{
      return res.json({
        success: true,
        order
      })
    })
    .catch((err)=>{
      console.log(err);
    });

}

module.exports.getAll = function(req, res) {

  Order.find({}).exec()
    .then(orders => res.json({success: true, orders}))
    .catch(err => console.log(err));

}
