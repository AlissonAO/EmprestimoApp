import pagarme from 'pagarme';
import Transacao from '../models/Transacao';
import DadosTransacao from '../models/DadosTransacao';
import auth from '../../config/auth';

class TrasacaoController {
  async store(req, res) {
    // teste front end
    try {
      const clienteFront = await pagarme.client.connect({
        encryption_key: process.env.PAGARME_ENCRYPTION_KEY,
      });

      const {
        card, amount, installments, customer, billing, items,
      } = auth;
      const card_hash = await clienteFront.security.encrypt(card);

      const client = await pagarme.client.connect({
        api_key: process.env.PAGARME_API_KEY,
      });
      //  console.log(client);
      const pagarmeTransaction = await client.transactions.create({
        amount,
        card_hash,
        installments,
        customer,
        billing,
        items,
      });
      const dadosTransacao = await DadosTransacao.create({
        status: pagarmeTransaction.status,
        acquirer_id: pagarmeTransaction.acquirer_id,
        authorization_code: pagarmeTransaction.authorization_code,
        amount: pagarmeTransaction.amount,
        id_processadora: pagarmeTransaction.id,
        card_holder_name: pagarmeTransaction.card_holder_name,
        card_last_digits: pagarmeTransaction.card_last_digits,
        card_brand: pagarmeTransaction.card_brand,
        user_id: req.userId,

      });
      if (pagarmeTransaction.status === 'paid') {
        const transacao = await Transacao.create({
          valor_entrada: req.body.valor_entrada,
          valor_saida: req.body.valor_saida,
          qtdParcela: req.body.qtdParcela,
          cpf: req.body.cpf,
          agencia: req.body.agencia,
          cc: req.body.cc,
          dadostransacao_id: dadosTransacao.id,
          user_id: req.userId,
        });
        return res.json({
          transacao,
          dadosTransacao,
        });
      }
      return res.status(400).json({ error: 'erro na transação' });
    } catch (error) {
      console.log(error.response);
      return res.status(400).json({ error: 'erro na transação' });
    }
  }

  async list(req, res) {
    const lista = await Transacao.findAll({
      where: {
        user_id: req.userId,
      },
    });
    return res.json(lista);
  }
}

export default new TrasacaoController();
