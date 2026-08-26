
const Product = require('../models/product');
const Shipment = require('../models/Shipment');
const User = require('../models/user');

const home = async (req, res) => {
  res.render('index.ejs');
};

const dashboard = async (req, res) => {
  try {
    const products = await Product.countDocuments();
    const shipments = await Shipment.countDocuments();
    const customers = await User.countDocuments({ role: 'customer' });

    const pendingShipments = await Shipment.countDocuments({
      status: 'pending',
    });

    const shippedShipments = await Shipment.countDocuments({
      status: 'shipped',
    });

    const deliveredShipments = await Shipment.countDocuments({
      status: 'delivered',
    });

    res.render('admin/dashboard.ejs', {
      products,
      shipments,
      customers,
      pendingShipments,
      shippedShipments,
      deliveredShipments,
    });
  } catch (err) {
    console.log(err);
    res.send('Something went wrong');
  }
};

module.exports = {
  home,
  dashboard,
};
