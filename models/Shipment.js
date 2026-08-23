const mongoose = require('mongoose');

const shippmentSchema = new mongoose.Schema({

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },

products: [
  {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
  },
],

  status: {
    type: String,
    enum: ['pending', 'shipped', 'delivered'],
    default: 'pending',
  },

  paymentMethod: {
  type: String,
  enum: ['Apple Pay', 'Cash on delivery','Paypal','Benefit Pay ','Credi Card '],
  required: true,
},


  shippmentAdress: {
    type: String,
    required: true,
  },

  shippmentDate: {
    type: Date,
    required: true,
  },

});

const Shipment = mongoose.model('Shipment', shippmentSchema);

module.exports = Shipment;