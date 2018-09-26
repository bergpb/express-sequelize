'use strict';

const faker = require('faker');

module.exports = {
  up: (queryInterface, Sequelize) => {
    const users = generateFakeUsers(5);
    return queryInterface.bulkInsert('Users', users, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};

function generateFakeUsers(count) {
  const users = [];
  for (let i = 0; i < count; i++) {
    const novoUser = {
      name: `${faker.name.findName()}`,
      username: `${faker.internet.userName()}`,
      password: `${faker.internet.password()}`,
      createdAt: faker.date.recent(90),
      updatedAt: faker.date.recent(90),
    };
    users.push(novoUser);
  }
  return users;
}