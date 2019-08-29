module.exports = function(sequelize, DataTypes) {
  var Item = sequelize.define("item", {
    itemName: DataTypes.STRING
  });

  // Item.associate = function(models) {
  //   Item.hasOne(models.JoinTable, {
  //     onDelete: "cascade"
  //   });
  // }


  return Item;
};
