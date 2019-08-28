'use strict';

const faker = require('faker');

module.exports = {
  up: (queryInterface, Sequelize) => {

      let accounts = [];

      for (let i = 0; i < 49; i++){
        let date = new Date();
        accounts.push({
          id:i,
          username: faker.internet.userName(),
          password: faker.internet.password(),
          createdAt: date,
          updatedAt: date
        })
      }

      return queryInterface.bulkInsert('accounts', accounts, {});

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
