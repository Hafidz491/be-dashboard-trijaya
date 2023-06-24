'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    const data = [
      {
        instansiId: 1,
        itemName: 'Rice',
        itemVolume: 5,
        itemUnit: 'kg',
        price: 25000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        instansiId: 2,
        itemName: 'Cooking Oil',
        itemVolume: 2,
        itemUnit: 'liters',
        price: 15000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        instansiId: 3,
        itemName: 'Chicken',
        itemVolume: 1,
        itemUnit: 'kg',
        price: 40000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        instansiId: 4,
        itemName: 'Sugar',
        itemVolume: 2,
        itemUnit: 'kg',
        price: 18000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        instansiId: 5,
        itemName: 'Salt',
        itemVolume: 0.5,
        itemUnit: 'kg',
        price: 5000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        instansiId: 6,
        itemName: 'Coffee',
        itemVolume: 250,
        itemUnit: 'grams',
        price: 30000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        instansiId: 7,
        itemName: 'Tea',
        itemVolume: 100,
        itemUnit: 'bags',
        price: 25000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        instansiId: 8,
        itemName: 'Milk',
        itemVolume: 1,
        itemUnit: 'liters',
        price: 12000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        instansiId: 9,
        itemName: 'Eggs',
        itemVolume: 12,
        itemUnit: 'pieces',
        price: 15000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        instansiId: 10,
        itemName: 'Bread',
        itemVolume: 1,
        itemUnit: 'loaf',
        price: 8000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        instansiId: 11,
        itemName: 'Cooking Gas',
        itemVolume: 3,
        itemUnit: 'kg',
        price: 50000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        instansiId: 12,
        itemName: 'Onion',
        itemVolume: 1,
        itemUnit: 'kg',
        price: 10000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        instansiId: 13,
        itemName: 'Garlic',
        itemVolume: 0.5,
        itemUnit: 'kg',
        price: 8000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        instansiId: 14,
        itemName: 'Tomatoes',
        itemVolume: 1,
        itemUnit: 'kg',
        price: 12000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        instansiId: 15,
        itemName: 'Potatoes',
        itemVolume: 2,
        itemUnit: 'kg',
        price: 15000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        instansiId: 16,
        itemName: 'Cabbage',
        itemVolume: 1,
        itemUnit: 'piece',
        price: 5000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        instansiId: 17,
        itemName: 'Carrots',
        itemVolume: 1,
        itemUnit: 'kg',
        price: 10000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        instansiId: 18,
        itemName: 'Soy Sauce',
        itemVolume: 500,
        itemUnit: 'ml',
        price: 12000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        instansiId: 19,
        itemName: 'Chili Sauce',
        itemVolume: 250,
        itemUnit: 'ml',
        price: 8000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        instansiId: 20,
        itemName: 'Toothpaste',
        itemVolume: 100,
        itemUnit: 'grams',
        price: 10000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        instansiId: 1,
        itemName: 'Shampoo',
        itemVolume: 200,
        itemUnit: 'ml',
        price: 15000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        instansiId: 2,
        itemName: 'Soap',
        itemVolume: 4,
        itemUnit: 'bars',
        price: 10000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        instansiId: 3,
        itemName: 'Toilet Paper',
        itemVolume: 6,
        itemUnit: 'rolls',
        price: 20000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        instansiId: 4,
        itemName: 'Hand Sanitizer',
        itemVolume: 100,
        itemUnit: 'ml',
        price: 15000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        instansiId: 5,
        itemName: 'Face Mask',
        itemVolume: 50,
        itemUnit: 'pieces',
        price: 30000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        instansiId: 6,
        itemName: 'Disinfectant',
        itemVolume: 500,
        itemUnit: 'ml',
        price: 25000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        instansiId: 7,
        itemName: 'Laundry Detergent',
        itemVolume: 1,
        itemUnit: 'kg',
        price: 35000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        instansiId: 8,
        itemName: 'Dishwashing Liquid',
        itemVolume: 750,
        itemUnit: 'ml',
        price: 18000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        instansiId: 9,
        itemName: 'Broom',
        itemVolume: 1,
        itemUnit: 'piece',
        price: 10000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        instansiId: 10,
        itemName: 'Mop',
        itemVolume: 1,
        itemUnit: 'piece',
        price: 15000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    return queryInterface.bulkInsert('Items', data, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Items', null, {});
  },
};