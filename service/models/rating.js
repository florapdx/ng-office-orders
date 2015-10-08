'use strict';
module.exports = function(sequelize, DataTypes) {
  var Rating = sequelize.define('Rating', {
    rating_hundreds: DataTypes.INTEGER,
    date: DataTypes.DATE,
    comment: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        Rating.belongsTo(models.User, {foreignKey: 'user'});
        Rating.belongsTo(models.Vendor, {foreignKey: 'vendor'});
      }
    }
  });
  return Rating;
};