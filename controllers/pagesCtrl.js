const Product = require('../models/product');
const User = require('../models/user');
const Shipment = require('../models/Shipment');

const home = async (req, res) => {
  res.render('index.ejs');
};

const dashboard = async (req, res) => {
  const products = await Product.countDocuments();
  const customers = await User.countDocuments({ role: 'customer' });
  const shipments = await Shipment.countDocuments();

  res.render('admin/dashboard.ejs', {
    products,
    customers,
    shipments,
  });
};

module.exports = {
  home,
  dashboard,
};