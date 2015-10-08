'use strict';
module.exports = function(sequelize, DataTypes) {
  var Order = sequelize.define('Order', {
    item: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    notes: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        Order.belongsTo(models.User, {foreignKey: 'user'});
        Order.belongsTo(models.OrderGroup, {foreignKey: 'orderGroup'});
      }
    }
  });
  return Order;
};