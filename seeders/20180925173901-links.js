'use strict';

const faker = require('faker');

module.exports = {
  up: (queryInterface, Sequelize) => {
    const links = generateFakeLinks(5);
    return queryInterface.bulkInsert('Links', links, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Links', null, {});
  }
};

function generateFakeLinks(count) {
  const links = [];
  for (let i = 0; i < count; i++) {
    const novoLink = {
      title: `${faker.name.title()}`,
      link: `${faker.random.image()}`,
      tags: `${faker.lorem.words()}`,
      visualized: faker.random.boolean(),
      createdAt: faker.date.recent(90),
      updatedAt: faker.date.recent(90),
    };
    links.push(novoLink);
  }
  return links;
}
