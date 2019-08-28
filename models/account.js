module.exports = function(sequelize, DataTypes) {
  var Account = sequelize.define("account", {
    username: DataTypes.STRING,
    password: DataTypes.STRING
  });

  return Account;
};
