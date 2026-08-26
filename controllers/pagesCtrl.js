const Product = require('../models/product');
const Shipment = require('../models/Shipment');

const home = async (req, res) => {
  res.render('intro.ejs');
};

const dashboard = async (req, res) => {
  try {
    const products = await Product.countDocuments();

    const shipments = await Shipment.countDocuments();

    // Products by category

    const skincare = await Product.countDocuments({
      category: 'skincare',
    });

    const makeup = await Product.countDocuments({
      category: 'makeup',
    });

    const haircare = await Product.countDocuments({
      category: 'haircare',
    });

    const bodycare = await Product.countDocuments({
      category: 'bodycare',
    });

    const toolsAccessories = await Product.countDocuments({
      category: 'tools&accessories',
    });


    // Shipments by status

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

      skincare,
      makeup,
      haircare,
      bodycare,
      toolsAccessories,

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