import Sequelize from 'sequelize';

import DadosTransacao from '../app/models/DadosTransacao';
import EnderecoUsuario from '../app/models/EnderecoUsuario';
import User from '../app/models/User';
import Trasacao from '../app/models/Transacao';
import databaseConfig from '../config/database';

const models = [DadosTransacao, User, Trasacao, EnderecoUsuario];
class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map((model) => model.init(this.connection))
      .map((model) => model.associateUser && model.associateUser(this.connection.models));
  }
}

export default new Database();
