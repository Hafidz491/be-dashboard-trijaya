'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Items', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      instansiId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Projects',
          key: 'id',
          onUpdate: 'cascade',
          onDelete: 'cascade',
        },
      },
      itemName: {
        type: Sequelize.STRING,
      },
      itemVolume: {
        type: Sequelize.INTEGER,
      },
      itemUnit: {
        type: Sequelize.STRING,
      },
      price: {
        type: Sequelize.BIGINT,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Items');
  },
};
