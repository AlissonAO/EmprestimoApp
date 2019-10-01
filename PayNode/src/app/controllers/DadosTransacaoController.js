import DadosTransacao from '../models/DadosTransacao';

class DadosTransacaoController {
  async store(req, res) {
    const dados = await DadosTransacao.create(req.body);
    return res.json(dados);
  }
}

export default new DadosTransacaoController();
