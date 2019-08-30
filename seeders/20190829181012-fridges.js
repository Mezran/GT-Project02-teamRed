'use strict';

const faker = require('faker');

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */

    let arr = [];

    for (let i = 0; i < 9; i++){
      let date = new Date();
      arr.push({
        accountId: 1,
        item: i,
        createdAt: date,
        updatedAt: date


      })
    }
    return queryInterface.bulkInsert('fridges', arr, {});


  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
