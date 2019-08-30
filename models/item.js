module.exports = function(sequelize, DataTypes) {
  var Item = sequelize.define("item", {
    itemName: DataTypes.STRING
  });


  Item.associate = function(models) {
    this.belongsToMany(models.fridge, {
      through: 'FridgeItem',
      // onDelete: "cascade"
    });
  }


  return Item;
};
