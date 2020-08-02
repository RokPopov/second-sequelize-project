"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "Popce",
          email: "popce@popce.com",
          phone: 1234567,
          password: "test",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Bosti",
          email: "bosti@bosti.com",
          phone: 1234567,
          password: "test",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Ci",
          email: "ci@ci.com",
          phone: 1234567,
          password: "test",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
