// imports
const express = require("express");
const fs = require('fs');
const path = require("path");
const db = require('./models');

// setup express app / create server
const app = express();
const PORT = process.env.PORT || 3000;

// middleware
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());
app.use(express.static('public'));

// require api and html routing
// require('./routes/api-routes.js')(app); // contains nothing atm
require('./routes/html-routes.js')(app, path);

// make server listen
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log(`server listening at ${PORT}`);
  });

})
