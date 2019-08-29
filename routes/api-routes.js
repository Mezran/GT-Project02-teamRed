const db = require('../models');
const path = require("path");
const passport = require('passport');


module.exports = function(app) {

  // app.post('/api/login', function(req, res){
  //   const userAccountName = req.body.username;
  //   db.account.findOne({
  //     where:{
  //       username:req.body.username,
  //       password:req.body.password
  //     }
  //   })
  //   .then(function(results) {
  //     if(results === null){
  //       // res.end(); // invalid user
  //       res.status(401).send({message: 'You are not authorized.'});
  //     } else {
  //       // getThing(userAccountName);
  //       req.user = results.username;
  //       res.json({message:1, username: results.username}); // valid user
  //
  //
  //        // valid user
  //       // load user into the new webpage
  //     }});
  //
  //
  // });// end app.post


  app.post('/login',
  passport.authenticate('local', {
    successRedirect: '/infobox',
    failureRedirect: '/login',
    failerFlash:true
  })
);

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/login.html'))
  // if (req.user) {
  //   res.send(`Welcome ${req.user.displayName}!`);
  // } else res.redirect('/login');
});


  app.post('/api/newAccounts', function(req, res) {
    const newAcctInfo = req.body;
    db.account.create(req.body).then(function(dbPost) {
      res.json(dbPost);
    });
  });

  // delete?
  app.get('/auth/isauth', function(req, res) {
    console.log(req.user);
    if ( req.user ) return res.send({success: 1})

    res.status(401).send({message: 'Not Authorized'});
  })


  function getThing(userAccountName){

  }

}
