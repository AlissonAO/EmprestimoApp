import jwt from 'jsonwebtoken';
import { promisify } from 'util';

import auth from '../../config/auth';

export default async (req, res, next) => {
  const autorizacao = req.headers.authorization;
  if (!autorizacao) {
    return res.status(401).json({ error: 'Token não enviado' });
  }
  const [, token] = autorizacao.split(' ');

  try {
    const decoder = await promisify(jwt.verify)(token, auth.secret);
    req.userId = decoder.id;
    return next();
  } catch (error) {
    return res.status(401).json({ erro: 'token invalido' });
  }
};
