module.exports = function(sequelize, DataTypes) {
  const Fridge = sequelize.define("fridge", {
    accountId: DataTypes.INTEGER,
    item: DataTypes.INTEGER
  });

  // Fridge.associate = function(models) {
  //   Fridge.belongsTo(models.Account, {
  //     foreignKey: {
  //       allowNull: false
  //     }
  //   })

    // Fridge.hasMany(models.JoinTable, {
    //   onDelete: "cascade"
    // });

  // };



  return Fridge;
};
