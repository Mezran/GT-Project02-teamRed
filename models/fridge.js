module.exports = function(sequelize, DataTypes) {
  const Fridge = sequelize.define("fridge", {
    accountId: DataTypes.INTEGER,
    item: DataTypes.INTEGER
  });

  Fridge.associate = function(models) {
    this.belongsTo(models.account);
    this.belongsToMany(models.item, {
      through: 'FridgeItem'
      // foreignKey: {
      //   allowNull: false
      // }
    })

    // Fridge.hasMany(models.JoinTable, {
    //   onDelete: "cascade"
    // });

  };



  return Fridge;
};
