'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('OrderGroups', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      orderDate: {
        type: Sequelize.DATE
      },
      officeCity: {
        type: Sequelize.STRING
      },
      orderTotalCents: {
        type: Sequelize.INTEGER
      },
      deliveryChargeCents: {
        type: Sequelize.INTEGER
      },
      totalCostCents: {
        type: Sequelize.INTEGER
      },
      ordered: {
        type: Sequelize.BOOLEAN
      },
      fulfilled: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('OrderGroups');
  }
};