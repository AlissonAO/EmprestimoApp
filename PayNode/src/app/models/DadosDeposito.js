import Sequelize, { Model } from 'sequelize';


class DadosDeposito extends Model {
  static init(sequelize) {
    super.init({
      nome_depositante: Sequelize.STRING,
      cpf: Sequelize.STRING,
      agencia: Sequelize.STRING,
      cc: Sequelize.STRING,
      valor_deposito: Sequelize.STRING,
    }, {
      sequelize,
    });
    return this;
  }
}

export default DadosDeposito;
