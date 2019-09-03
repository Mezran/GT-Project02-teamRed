const db = require('../models');
const path = require("path");
//const passport = require('passport');


module.exports = function (app, passport) {

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
    successRedirect: '/checkbox',
    failureRedirect: '/login',
    failerFlash:true
  })
);


  app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/logIn.html'))
    // if (req.user) {
    //   res.send(`Welcome ${req.user.displayName}!`);
    // } else res.redirect('/login');
  });


  // GET /auth/google
  //   Use passport.authenticate() as route middleware to authenticate the
  //   request.  The first step in G oogle authentication will involve
  //   redirecting the user to google.com.  After authorization, Google
  //   will redirect the user back to this application at /auth/google/callback
  app.get('/auth/google',
    passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login'] }));

  // GET /auth/google/callback
  //   Use passport.authenticate() as route middleware to authenticate the
  //   request.  If authentication fails, the user will be redirected back to the
  //   login page.  Otherwise, the primary route function function will be called,
  //   which, in this example, will redirect the user to the home page.
  app.get('/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/login' }),
    function (req, res) {
      res.redirect('/');
    });


  app.post('/api/newAccounts', function (req, res) {
    const newAcctInfo = req.body;
    db.account.create(req.body)
    .then(function(dbPost) {
      console.log(dbPost.dataValues.id)
      db.fridge.create(
        {
          accountId: dbPost.dataValues.id,
          item: 1
        }
      ).then(function(){})
      res.json(dbPost);
    });
  });


  app.get('/auth/isauth', function(req, res) {
    console.log(req.user);
    if (req.user) return res.send({ success: 1 })

    res.status(401).send({ message: 'Not Authorized' });
  })


  // function getThing(userAccountName){
  //
  // }



  app.get('/users', (req, res) => {
    console.log(db);
    console.log(db.account);
    console.log(db.fridge);
    console.log(db.item);
    db.account.findAll({
      include: [
        {
          model: db.fridge,
          include: [
            {
              model: db.item
            }
          ]
        }
      ]
    })
    .then(users => {
      const resObj = users.map(user => {

        //tidy up the user data
        // return Object.assign(
        //   {},
        //   {
        //     user_id: Account.id,
        //     username: Account.username,
        //     role: Account.role,
        //     posts: Account.posts.map(post => {
        //
        //       //tidy up the post data
        //       return Object.assign(
        //         {},
        //         {
        //           post_id: post.id,
        //           user_id: post.user_id,
        //           content: post.content,
        //           comments: post.comments.map(comment => {
        //
        //             //tidy up the comment data
        //             return Object.assign(
        //               {},
        //               {
        //                 comment_id: comment.id,
        //                 post_id: comment.post_id,
        //                 commenter: comment.commenter_username,
        //                 commenter_email: comment.commenter_email,
        //                 content: comment.content
        //               }
        //             )
        //           })
        //         }
        //         )
        //     })
        //   }
        // )
      });
      res.json(resObj)
    });
  });




  //when user 'adds an item' to their fridge
  app.post('/api/addItem', function(req, res) {
    console.log("add item fired");

    const data = req.body;
    // console.log(req.body.name);
    // console.log(req.user);
    // console.log(data);
    // console.log(req.body);
    // console.log(req.body.name);

    // db.item.create({
    //   fridgeId:
    // })

    db.item.findOne({
      where:{
        itemName:req.body.name
      }
    }).then(function(results){
      // console.log(results)
      // console.log(results.dataValues.id);
      // const newRow = {
      //   dbItemIDId: results.dataValues.id,
      //   dbItemName: req.body.name
      // };
      // console.log(newRow);
      // db.fridge.create({
      //   accountId: 1,
      //   item:results.dataValues.id
      // })

      // console.log(request.user);
      db.fridge.findOne({
        where: {
          id: req.user.id
        }
      }).then(fridge => {
        // console.log(results);
        console.log(fridge);
        fridge.addItem(results.dataValues.id, results.dataValues.id)
        res.json(results);
      })
      // console.log(db.fridge);

      // .then(function(results2){
      //
      // })





    })

    // db.fridge.create(req.body)
    // .then(function(dbPost) {
    //   res.json(dbPost);
    // });
  }); // end app.post api/addItem


  app.get("/api/loadSavedItems", function(req, res){
    console.log(req.user.id);
    db.fridge.findAll({
      include:[db.item],
      where:{
        accountId: req.user.id
      }
    }).then(function(results){
      console.log("returning data")
      console.log(results);
      res.json(results);
    })
  })




  app.delete("/api/deleteItem/:item", function(req, res){
    db.fridge.findOne({
      where:{
        accountId:req.user.id
      }
    }).then(function(fridge){
      fridge.removeItem(req.params.item);
      res.json({message:"completed"})
    })
  })

      // db.Todo.destroy({where:{id:req.params.id}})
      // .then(function(results){
      //   res.json({message:"Success"});
      // })



}
