// imports
const express = require("express");
const passport = require('passport');
const fs = require('fs');
const path = require("path");
const session = require('express-session');
const db = require('./models');
const {sequelize, account} = require('./models');

const LocalStrategy = require('passport-local').Strategy;


// setup express app / create server
const app = express();
const PORT = process.env.PORT || 3000;

// middleware
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());
app.use(express.static('public'));

app.use(session({
  secret: 'keyboardCat',
  resave: false,
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());



// require api and html routing
require('./routes/api-routes.js')(app);
require('./routes/html-routes.js')(app, path);







// authentication

passport.use(new LocalStrategy(
  function (username, password, done) {
    console.log(account);
    console.log(username);
    console.log(password);

    account.findOne({
      where: {
        username: username
      }
    }).then(user => {
      if (user) {
        const valid = user.validatePassword(password);

        if(valid) return done(null, user);

        return done(null, false);
      } else {
        done(null, false);
      }
    })


  } // end function
)) // end passport.use strategy

passport.serializeUser(function (user, done) {
  // console.log(user);
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});







// make server listen   {force:true}
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log(`server listening at ${PORT}`);
  });

})
