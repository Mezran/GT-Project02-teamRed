module.exports = function(sequelize, DataTypes) {
  var Account = sequelize.define("account", {
    username: {
      type: DataTypes.STRING,
      unique: true
    },
    password: DataTypes.STRING,
    googleID: DataTypes.STRING
  });

  // Account.associate = function(models) {
  //   Account.hasOne(models.Fridge, {
  //     onDelete:'cascade'
  //   });
  // };

  Account.prototype.validatePassword = function(val) {
    return this.password === val;
  }

  return Account;
};
