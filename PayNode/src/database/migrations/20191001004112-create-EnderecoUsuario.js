
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('EnderecoUsuario', {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    nome: {
      type: Sequelize.STRING,

    },
    endereco: {
      type: Sequelize.STRING,
    },
    pais: {
      type: Sequelize.STRING,
    },
    estado: {
      type: Sequelize.STRING,

    },
    cidade: {
      type: Sequelize.STRING,

    },
    bairro: {
      type: Sequelize.STRING,

    },
    rua: {
      type: Sequelize.STRING,

    },
    num_rua: {
      type: Sequelize.STRING,

    },
    cep: {
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

  down: (queryInterface) => queryInterface.dropTable('EnderecoUsuario'),
};
