module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Trip', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      address_start: {
        type: Sequelize.STRING
      },
      address_finish: {
        type: Sequelize.STRING
      },
      user_id: {
        type: Sequelize.STRING
      },
      
      isStarted: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      
      isFinished: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      
      isActive: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Trip');
  }
};