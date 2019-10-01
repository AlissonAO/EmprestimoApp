import Sequelize, { Model } from 'sequelize';


class EnderecoUsuario extends Model {
  static init(sequelize) {
    super.init({
      nome: Sequelize.STRING,
      endereco: Sequelize.STRING,
      pais: Sequelize.STRING,
      estado: Sequelize.STRING,
      cidade: Sequelize.STRING,
      bairro: Sequelize.STRING,
      rua: Sequelize.STRING,
      num_rua: Sequelize.STRING,
      cep: Sequelize.STRING,
      user_id: Sequelize.STRING,
    }, {
      freezeTableName: true,
      sequelize,
    });
    return this;
  }

  static associateUser(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
  }
}

export default EnderecoUsuario;
