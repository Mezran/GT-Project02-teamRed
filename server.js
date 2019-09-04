require("dotenv").config();

// imports
const express = require("express");
const passport = require('passport');
const fs = require('fs');
const path = require("path");
const session = require('express-session');
const db = require('./models');
const {sequelize, account} = require('./models');

let GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
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

// authentication

passport.use(new LocalStrategy(
  function (username, password, done) {
    console.log(username);
    console.log(password);

    db.account.findOne({
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
)) // end local passport strategy


// Use the GoogleStrategy within Passport.
//   Strategies in Passport require a `verify` function, which accept
//   credentials (in this case, an accessToken, refreshToken, and Google
//   profile), and invoke a callback with a user object.
passport.use(new GoogleStrategy({
  clientID: "842729916089-4bdb3mdn3nlluvv2sv8ekld8vjveunqj.apps.googleusercontent.com",
  clientSecret: "VPW_pakQUn2tNKAnPDQuTcYC",
  callbackURL: window.location.href + "/auth/google/callback"
},
  function (accessToken, refreshToken, profile, done) {

    account.findOrCreate({
      where: {
        googleID: profile.id
      }
    }).then(function (data) {

      return done(null, data[0]);
    }).catch(function (err) {
      console.log(err);
    });
  }
));

//end passport's Google strategy for login


passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  db.account.findByPk(id).then(function (user) {
    done(null, user);
  }).catch(function (err) {
    done(err)
  });
});

app.use(session({
  secret: process.env.SESSIONKEY,
  resave: false,
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

// require api and html routing
require('./routes/api-routes.js')(app, passport);
require('./routes/html-routes.js')(app, passport);


// make server listen   {force:true}
db.sequelize.sync({force:false}).then(function() {
  app.listen(PORT, function() {
    console.log(`server listening at ${PORT}`);
  });

})
