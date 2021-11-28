'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     */
      await queryInterface.bulkInsert('Categories', [
        {
        name: 'Painter',
        createdAt: new Date(),
        updatedAt: new Date(),
        },
        {
          name : 'Carpenter',
          createdAt:new Date(),
          updatedAt: new Date(),
        },
        {
          name : 'Plumber',
          createdAt:new Date(),
          updatedAt: new Date(),
        },
        {
          name : 'Electrician',
          createdAt:new Date(),
          updatedAt: new Date(),
        },
        {
          name : 'House Cleaning',
          createdAt:new Date(),
          updatedAt: new Date(),
        },
        {
          name : 'Movers',
          createdAt:new Date(),
          updatedAt: new Date()
        }
    ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
      
     */
     await queryInterface.bulkDelete('Categories', null, {});
  }
};
