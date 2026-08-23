const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,

  price: Number,

  quantity: Number,

  category: {
    type: String,
    enum: ['skincare', 'makeup', 'haircare', 'bodycare', 'tools&accessories'],
  },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;