const Shipment = require('../models/Shipment');

const checkout = (req, res) => {
  const cart = req.session.cart || [];

  res.render('checkout/index.ejs', { cart });
};

const createOrder = async (req, res) => {
  const cart = req.session.cart || [];

 await Shipment.create({
  user: req.session.user._id,
  products: cart.map(item => item.product),
  status: 'pending',
  paymentMethod: req.body.paymentMethod,
  shippmentAdress: req.body.shippmentAdress,
  shippmentDate: new Date(),
});
  req.session.cart = [];

  res.redirect('/my-shipments');
};


module.exports = {
  checkout,
  createOrder,
};