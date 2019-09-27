import Sequelize, { Model } from 'sequelize';


class Trasacao extends Model {
  static init(sequelize) {
    super.init({
      valor_entrada: Sequelize.STRING,
      valor_saida: Sequelize.STRING,
      qtdParcela: Sequelize.STRING,
    }, {
      sequelize,
    });
    return this;
  }

  static associate(models) {
    this.belongsTo(models.User);
  }
}

export default Trasacao;
