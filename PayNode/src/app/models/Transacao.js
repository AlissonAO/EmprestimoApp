import Sequelize, { Model } from 'sequelize';


class Transacao extends Model {
  static init(sequelize) {
    super.init({
      valor_entrada: Sequelize.STRING,
      valor_saida: Sequelize.STRING,
      qtdParcela: Sequelize.STRING,
      cpf: Sequelize.STRING,
      agencia: Sequelize.STRING,
      cc: Sequelize.STRING,
      user_id: Sequelize.INTEGER,
      dadostransacao_id: Sequelize.INTEGER,
    }, {
      freezeTableName: true,
      sequelize,
    });
    return this;
  }

  static associateUser(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
    this.belongsTo(models.DadosTransacao, { foreignKey: 'dadostransacao_id', as: 'DadosTransacao' });
  }
}

export default Transacao;
