"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "todoItems",
      [
        {
          task: "Creating a new project",
          deadline: "tomorrow",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          task: "Optimizing a new project",
          deadline: "today",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("todoItems", null, {});
  },
};
