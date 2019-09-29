import Sequelize, { Model } from 'sequelize';


class DadosTransacao extends Model {
  static init(sequelize) {
    super.init({
      status: Sequelize.STRING,
      acquirer_id: Sequelize.STRING,
      authorization_code: Sequelize.STRING,
      amount: Sequelize.STRING,
      id_processadora: Sequelize.STRING,
      card_holder_name: Sequelize.STRING,
      card_last_digits: Sequelize.STRING,
      card_brand: Sequelize.STRING,
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

export default DadosTransacao;
