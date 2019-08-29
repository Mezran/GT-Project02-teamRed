module.exports = function(sequelize, DataTypes) {
  var Fridge = sequelize.define("fridge", {
    ownerID: DataTypes.INTEGER,
    item: DataTypes.INTEGER
  });

  // Fridge.associate = function(models) {
  //   Fridge.belongsTo(models.Account, {
  //     foreignKey: {
  //       allowNull: false
  //     }
  //   });
  //
  //   Fridge.hasMany(models.JoinTable, {
  //     onDelete: "cascade"
  //   });
  //
  // }


  return Fridge;
};
