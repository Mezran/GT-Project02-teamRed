const path = require("path");

module.exports = function (app, passport) {
 

  // this is a catch all for any webpage requested that
  // are not specified in our public folder
  // should result in taking the user to the index.html page

  app.get('/info', checkAuthenticated, function (req, res) {
    res.sendFile(path.join(__dirname, '../public/checkbox.html'))
  })

  app.get('/createAcct', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/createAcct.html'))
  })

  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/logIn.html'));
  })

  function checkAuthenticated(req, res, next) {
    if (req.isAuthenticated())
      return next()

    res.redirect('/logIn.html')
  }

  function checkNotAuthenticated(req, res, next) {
    if (req.isAuthenticated()) 
      return res.redirect('/')

    next()
  }
} // end module.exports
