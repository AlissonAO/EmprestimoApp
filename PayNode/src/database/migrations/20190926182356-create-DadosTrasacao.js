
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('DadosTransacao', {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    status: {
      type: Sequelize.STRING,

    },
    acquirer_id: {
      type: Sequelize.STRING,
    },
    authorization_code: {
      type: Sequelize.STRING,
    },
    amount: {
      type: Sequelize.STRING,

    },
    id_processadora: {
      type: Sequelize.STRING,

    },
    card_holder_name: {
      type: Sequelize.STRING,

    },
    card_last_digits: {
      type: Sequelize.STRING,

    },
    card_brand: {
      type: Sequelize.STRING,

    },
    user_id: {
      type: Sequelize.INTEGER,
      references: { model: 'users', key: 'id' },
      allowNull: true,
    },
    created_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    updated_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },

  }),
  down: (queryInterface) => queryInterface.dropTable('DadosTransacao'),
};
