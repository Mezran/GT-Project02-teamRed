module.exports = function(sequelize, DataTypes) {
  var Item = sequelize.define("item", {
    itemName: DataTypes.STRING
  });

  // Item.associate = function(models) {
  //   Item.hasMany(models.JoinTable, {
  //     onDelete: "cascade"
  //   });
  // }


  return Item;
};
