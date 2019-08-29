module.exports = function(sequelize, DataTypes) {
  var JoinTable = sequelize.define("joinTable", {
    fridgeItemNo: DataTypes.INTEGER,
    itemItemNo: DataTypes.INTEGER
  });

  // JoinTable.associate = function(models) {
  //   Fridge.belongsTo(models.Account, {
  //     foreignKey: {
  //       allowNull: false
  //     }
  //   });
  //
  //   Fridge.belongsTo(models.Account, {
  //     foreignKey: {
  //       allowNull:false
  //     }
  //   })
  // };

  // JoinTable.associate = function(models) {
  //   JoinTable.hasMany(models.fridge, {
  //     onDelete: "cascade"
  //   });
  //
  //   JoinTable.hasMany(models.item, {
  //     onDelete: "cascade"
  //   });
  // }


  return JoinTable;
};
