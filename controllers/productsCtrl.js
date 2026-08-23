const Product = require('../models/product');

const index = async (req, res) => {
  const products = await Product.find({});
  res.render('products/index.ejs', { products });
};

const newProduct = (req, res) => {
  res.render('products/new.ejs');
};

const create = async (req, res) => {
  await Product.create(req.body);
  res.redirect('/products');
};

const show = async (req, res) => {
  const product = await Product.findById(req.params.id);
  res.render('products/show.ejs', { product });
};

const edit = async (req, res) => {
  const product = await Product.findById(req.params.id);
  res.render('products/edit.ejs', { product });
};

const update = async (req, res) => {
  await Product.findByIdAndUpdate(req.params.id, req.body);
  res.redirect(`/products/${req.params.id}`);
};
const deleteProduct = async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.redirect('/products');
};

module.exports = {
  index,
  new: newProduct,
  create,
  show,
  edit,
  update,
  deleteProduct,
};