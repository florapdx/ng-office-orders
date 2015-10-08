'use strict';
module.exports = function(sequelize, DataTypes) {
  var Vendor = sequelize.define('Vendor', {
    name: DataTypes.STRING,
    streetAddress: DataTypes.TEXT,
    phone: DataTypes.STRING,
    websiteUrl: DataTypes.STRING,
    menuUrl: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Vendor.hasMany(models.OrderGroup, {as: 'GroupOrders'});
        Vendor.hasMany(models.Rating, {as: 'Rating'});
      }
    }
  });
  return Vendor;
};