module.exports = function(app, path) {


  // this is a catch all for any webpage requested that
  // are not specified in our public folder
  // should result in taking the user to the index.html page

  app.get('/info', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/infobox.html'))
  })

  app.get('/createAcct', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/createAcct.html'))
  })
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/logIn.html'));
  })




}
