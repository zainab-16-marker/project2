const Product = require('../models/product');

const add = async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (!req.session.cart) {
    req.session.cart = [];
  }

  req.session.cart.push({
    product: product._id,
    name: product.name,
    price: product.price,
    quantity: req.body.quantity,
  });

  res.redirect('/cart');
};

const index = (req, res) => {
  const cart = req.session.cart || [];

  res.render('cart/index.ejs', { cart });
};

const update = (req, res) => {
  const cart = req.session.cart || [];

  const item = cart.find(
    item => item.product.toString() === req.params.id
  );

  if (item) {
    item.quantity = req.body.quantity;
  }

  req.session.cart = cart;

  res.redirect('/cart');
};
const remove = (req, res) => {
  const cart = req.session.cart || [];

  req.session.cart = cart.filter(
    item => item.product.toString() !== req.params.id
  );

  res.redirect('/cart');
};
module.exports = {
  add,
  index,
  update,
  remove,


};