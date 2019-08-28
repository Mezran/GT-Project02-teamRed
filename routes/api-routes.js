const db = require('../models');


module.exports = function(app) {

  app.get('/api/login', function(req, res){
    db.Accounts.findOne({})
    .then(function(results) {
      res.json(results);
    });
  });


  app.post('/api/newAccounts', function(req, res) {
    const newAcctInfo = req.body;
    db.account.create(req.body).then(function(dbPost) {
      res.json(dbPost);
    });
  });

}
