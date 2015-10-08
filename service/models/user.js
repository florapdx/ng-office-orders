'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        User.hasMany(models.Order, {as: 'Orders'});
        User.hasMany(models.Rating, {as: 'Ratings'});
      }
    }
  });
  return User;
};