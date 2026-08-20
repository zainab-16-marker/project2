const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
name:String,
price:Number,
quantity:Number,
  category:{
     type:String,
     enum: ['skincare', 'makeup','haircare','bodycare','tools&accessories'],
  },


})


const shippmentSchema = new mongoose.Schema({
user:[userSchema],
product:[productSchema],
  status:{
     type:String,
     enum: ['pending', 'shipped','deliverd'],
shippmentAdress:String,
shippmentDate:Date,
  },


})
// create the schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },

  role:{
     type:String,
     enum: ['admin', 'customer'],
  },
});

// initial the model

const User = mongoose.model('User', userSchema);

// export it
module.exports = User;
