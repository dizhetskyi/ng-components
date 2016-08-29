var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var statuses = [
  'NEW',
  'PENDING',
  'CLOSED'
]

var orderSchema = new Schema({
  date: {
    type: Date,
    default: new Date
  },
  status: {
    type: String,
    required: true,
    enum: statuses,
    default: statuses[0]
  },
  products: [],
  user: String
}, {
  collection: 'fs2_orders'
});

mongoose.model('Order', orderSchema);

module.exports = mongoose.model('Order');
