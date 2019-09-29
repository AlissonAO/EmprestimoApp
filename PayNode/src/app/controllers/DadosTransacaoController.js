import DadosDeposito from '../models/DadosDeposito';

class DadosTransacaoController {
  async store(req, res) {
    const dados = await DadosDeposito.create(req.body);
    return res.json(dados);
  }
}

export default new DadosTransacaoController();
