'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('relationshipUserTeches', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER
      },
      tech1: {
        type: Sequelize.STRING
      },
      tech2: {
        type: Sequelize.STRING
      },
      tech3: {
        type: Sequelize.STRING
      },
      tech4: {
        type: Sequelize.STRING
      },
      tech5: {
        type: Sequelize.STRING
      },
      tech6: {
        type: Sequelize.STRING
      },
      tech7: {
        type: Sequelize.STRING
      },
      tech8: {
        type: Sequelize.STRING
      },
      tech9: {
        type: Sequelize.STRING
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('relationshipUserTeches');
  }
};