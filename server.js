/* eslint-disable prefer-destructuring */
require('dotenv').config();
require('./config/database');

const path = require('path');
const express = require('express');

const app = express();

// Middleware
const session = require('express-session');
const MongoStore = require('connect-mongo').MongoStore;
const methodOverride = require('method-override');
const morgan = require('morgan');
const isSignedIn = require('./middleware/isSignedIn');
const addUserToViews = require('./middleware/addUserToViews');

// Routers
const authRouter = require('./routes/authRouter');
const pagesRouter = require('./routes/pagesRouter');

const productsCtrl = require('./controllers/productsCtrl');
const shippmentsCtrl = require('./controllers/shippmentsCtrl');
const cartCtrl = require('./controllers/cartCtrl');
const checkoutCtrl = require('./controllers/checkoutCtrl');
const pagesCtrl = require('./controllers/pagesCtrl');


// Set the port from environment variable or default to 3000
const port = process.env.PORT ? process.env.PORT : '3000';

// MIDDLEWARE
app.use(express.static(path.join(__dirname, 'public')));
// Middleware to parse URL-encoded data from forms
app.use(express.urlencoded({ extended: false }));
// Middleware for using HTTP verbs such as PUT or DELETE
app.use(methodOverride('_method'));
// Morgan for logging HTTP requests
app.use(morgan('dev'));
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({ mongoUrl: process.env.MONGODB_URI }),
  })
);
app.use(addUserToViews);

// ROUTES
app.use('', pagesRouter);
app.use('/auth', authRouter);
app.get('/admin/dashboard', pagesCtrl.dashboard);


app.use(isSignedIn);
//customer 
app.get('/shop', productsCtrl.customerProducts);
app.get('/shop/:id', productsCtrl.customerShow);
app.post('/cart/add/:id', cartCtrl.add);
app.get('/cart', cartCtrl.index);
app.put('/cart/:id', cartCtrl.update);
app.delete('/cart/:id', cartCtrl.remove);
app.get('/checkout', checkoutCtrl.checkout);
app.post('/checkout', checkoutCtrl.createOrder);
app.get('/my-shipments', shippmentsCtrl.customerShipments);

// products routes

app.get('/products', productsCtrl.index);
app.get('/products/new', productsCtrl.new);
app.post('/products', productsCtrl.create);
app.get('/products/:id', productsCtrl.show);
app.get('/products/:id/edit', productsCtrl.edit);
app.put('/products/:id', productsCtrl.update);
app.delete('/products/:id', productsCtrl.deleteProduct);
// Customer middleware

//shipments routes
app.get('/shippments', shippmentsCtrl.index);
app.get('/shippments/new', shippmentsCtrl.new);
app.post('/shippments', shippmentsCtrl.create);
app.get('/shippments/:id', shippmentsCtrl.show);
app.get('/shippments/:id/edit', shippmentsCtrl.edit);
app.put('/shippments/:id', shippmentsCtrl.update);
app.delete('/shippments/:id', shippmentsCtrl.deleteShip);



app.use(isSignedIn);
app.get('/protected', async (req, res) => {
  res.send(`You are logged in as ${req.session.user.username}`);
});





//shippments routes




app.listen(port, () => {
  console.log(`The express app is ready on port ${port}!`);
});
