import Sequelize from 'sequelize';

import User from '../app/models/User';
import Transacao from '../app/models/Transacao';
import DadosDeposito from '../app/models/DadosDeposito';
import databaseConfig from '../config/database';

const models = [User, Transacao, DadosDeposito];
class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map((model) => model.init(this.connection));
  }
}

export default new Database();
