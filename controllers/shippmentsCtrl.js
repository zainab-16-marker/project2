
const shipment = require('../models/Shipment')

const index = async (req, res) => {
  const shipments = await shipment.find({});
  res.render('shippments/index.ejs', { shipment });
};

const newship = (req, res) => {
  res.render('shippments/new.ejs');
};

const create = async (req, res) => {
  await shipment.create(req.body);
  res.redirect('/shippments');
};

const show = async (req, res) => { 
  const shipments = await shipment.findById(req.params.id);
  res.render('shippments/show.ejs', { Shippment });
};

const edit = async (req, res) => {
  const shipments = await shipment.findById(req.params.id);
  res.render('Shippment/edit.ejs', { Shippment });
};

const update = async (req, res) => {
  await shipment.findByIdAndUpdate(req.params.id, req.body);
  res.redirect(`/shippment/${req.params.id}`);
};
const deleteShip = async (req, res) => {
  await shipment.findByIdAndDelete(req.params.id);
  res.redirect('/shippment');
};
 

module.exports={
    index,
    new: newship,
    create,
    delete:deleteShip ,
    update,
    edit,
    show,

}