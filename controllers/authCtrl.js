const bcrypt = require('bcrypt');
const User = require('../models/user');

const SALT_ROUDS = 10;

const signup = async (req, res) => {
  res.render('auth/sign-up.ejs');
};

const register = async (req, res) => {
  try {
   
    const userInDatabase = await User.findOne({
      username: req.body.username,
    });

   
    if (userInDatabase) {
      return res.send('Invalid input');
    }

    
    if (req.body.password !== req.body.confirmPassword) {
      return res.send('Invalid input');
    }

    
    const hashedPassword = bcrypt.hashSync(
      req.body.password,
      SALT_ROUDS
    );

    const user = await User.create({
      username: req.body.username,
      password: hashedPassword,
      role: req.body.username === 'zoiadmin' ? 'admin' : 'customer',
    });

    req.session.user = {
      username: user.username,
      _id: user._id,
    };

    req.session.save(() => {

      if (user.username === 'zoiadmin') {
        return res.redirect('/admin/dashboard');
      }

      res.redirect('/shop');

    });
  } catch (err) {
    console.log(err);
    res.send('something went wrong');
  }
};

const signin = async (req, res) => {
  res.render('auth/sign-in.ejs');
};

const login = async (req, res) => {
  const userInDatabase = await User.findOne({
    username: req.body.username,
  });

  if (!userInDatabase) {
    return res.send('Invalid credentials');
  }

  if (!bcrypt.compareSync(
    req.body.password,
    userInDatabase.password
  )) {
    return res.send('Invalid credentials');
  }

  req.session.user = {
    username: userInDatabase.username,
    _id: userInDatabase._id,
  };

  req.session.save(() => {

    if (userInDatabase.username === 'zoiadmin') {
      return res.redirect('/admin/dashboard');
    }

    res.redirect('/shop');

  });
};

const signout = async (req, res) => {
  req.session.destroy(() => {
    res.redirect('/');
  });
};

module.exports = {
  signup,
  register,
  signin,
  login,
  signout,
};