'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('weathers', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      fecha: {
        type: Sequelize.DATE
      },
      indicativo: {
        type: Sequelize.STRING
      },
      nombre: {
        type: Sequelize.STRING
      },
      provincia: {
        type: Sequelize.STRING
      },
      altitud: {
        type: Sequelize.INTEGER
      },
      tmed: {
        type: Sequelize.DECIMAL
      },
      prec: {
        type: Sequelize.STRING
      },
      tmin: {
        type: Sequelize.DECIMAL
      },
      tmax: {
        type: Sequelize.DECIMAL
      },
      dir: {
        type: Sequelize.INTEGER
      },
      velmedia: {
        type: Sequelize.DECIMAL
      },
      racha: {
        type: Sequelize.DECIMAL
      },
      sol: {
        type: Sequelize.DECIMAL
      },
      presMax: {
        type: Sequelize.DECIMAL
      },
      presMin: {
        type: Sequelize.DECIMAL
      },
      hrMedia: {
        type: Sequelize.INTEGER
      },
      hrMax: {
        type: Sequelize.INTEGER
      },
      hrMin: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      },
      deletedAt: {
        type: Sequelize.DATE
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('weathers')
  }
}
