const Shipment = require('../models/Shipment');
const User = require('../models/user');
const Product = require('../models/product');



const index = async (req, res) => {
  const shippments = await Shipment.find({})
    .populate('user')
    .populate('products');

  res.render('shippments/index.ejs', { shippments });
};



const customerShipments = async (req, res) => {
  const shippments = await Shipment.find({
    user: req.session.user._id,
  }).populate('products');

  res.render('customer/shipments.ejs', { shippments });
};

const newShip = async (req, res) => {
  const users = await User.find({});
  const products = await Product.find({});

  res.render('shippments/new.ejs', { users, products });
};
const create = async (req, res) => {
  await Shipment.create(req.body);
  res.redirect('/shippments');
};

const show = async (req, res) => {
  const shipment = await Shipment.findById(req.params.id)
    .populate('user')
    .populate('products');

  res.render('shippments/show.ejs', { shipment });
};
const edit = async (req, res) => {
  const shipment = await Shipment.findById(req.params.id);

  res.render('shippments/edit.ejs', { shipment });
};

const update = async (req, res) => {
  await Shipment.findByIdAndUpdate(req.params.id, req.body);
  res.redirect(`/shippments/${req.params.id}`);
};

const deleteShip = async (req, res) => {
  await Shipment.findByIdAndDelete(req.params.id);
  res.redirect('/shippments');
};
// const customerShow = async (req, res) => {
//   const shipment = await Shipment.findOne({
//     _id: req.params.id,
//     user: req.session.user._id,
//   }).populate('products');

//   res.render('customer/shipment.ejs', { shipment });
// };

module.exports = {
  index,
  new: newShip,
  create,
  show,
  edit,
  update,
 deleteShip,
 customerShipments,

};