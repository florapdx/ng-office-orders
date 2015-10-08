'use strict';
module.exports = function(sequelize, DataTypes) {
  var OrderGroup = sequelize.define('OrderGroup', {
    orderDate: DataTypes.DATE,
    officeCity: DataTypes.STRING,
    orderTotalCents: DataTypes.INTEGER,
    deliveryChargeCents: DataTypes.INTEGER,
    totalCostCents: DataTypes.INTEGER,
    ordered: DataTypes.BOOLEAN,
    fulfilled: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        OrderGroup.hasMany(models.Order, {as: 'Orders'});
        OrderGroup.belongsTo(models.Vendor, {foreignKey: 'vendor'});
        OrderGroup.belongsTo(models.User, {foreignKey: 'orderedByUser'});
      }
    }
  });
  return OrderGroup;
};