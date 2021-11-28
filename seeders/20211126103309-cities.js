'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * */
      await queryInterface.bulkInsert('Cities', [
        {
        name: 'Nagpur',
        status : 1,
        },
        {
          name: 'Pune',
          status : 1,
        },
        {
          name: 'Mumbai',
          status : 1,
        },
        {
          name:'Bengalure',
          status : 1,
        },
        {
          name:'Delhi',
          status : 1,
        }
    ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     *  */
     await queryInterface.bulkDelete('Cities', null, {});
    
  }
};
