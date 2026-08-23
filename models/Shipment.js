const mongoose = require('mongoose');

const shippmentSchema = new mongoose.Schema({

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },

  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true,
  },

  status: {
    type: String,
    enum: ['pending', 'shipped', 'delivered'],
    default: 'pending',
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

const Shippment = mongoose.model('Shippment', shippmentSchema);

module.exports = Shippment;