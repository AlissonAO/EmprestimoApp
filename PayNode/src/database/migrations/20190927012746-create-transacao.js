
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Transacao', {
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
    qtd_parcela: {
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
    user_id: {
      type: Sequelize.INTEGER,
      references: { model: 'users', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
      allowNull: true,
    },
    dadostransacao_id: {
      type: Sequelize.INTEGER,
      references: { model: 'DadosTransacao', key: 'id' },
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

  down: (queryInterface) => queryInterface.dropTable('Transacao'),
};
