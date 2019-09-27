
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('dadosDeposito', {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    nome_depositante: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    cpf: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    agencia: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    cc: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    valor_deposito: {
      type: Sequelize.STRING,
      allowNull: false,
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
  down: (queryInterface) => queryInterface.dropTable('dadosDeposito'),
};
