
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('transacao', {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    valor_entrada: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    valor_saida: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    qtdParcela: {
      type: Sequelize.STRING,
      allowNull: false,

    },
    user_id: {
      type: Sequelize.INTEGER,
      references: { model: 'users', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
      allowNull: true,
    },

    dadosDeposito_id: {
      type: Sequelize.INTEGER,
      references: { model: 'dadosDeposito', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
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

  down: (queryInterface) => queryInterface.dropTable('transacao'),
};
