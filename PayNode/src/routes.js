import { Router } from 'express';
import UserController from './app/controllers/UserController';
import SessionControle from './app/controllers/SessionController';
// import DadosDepositoController from './app/controllers/DadosDepositoController';
import TrasacaoController from './app/controllers/TransacaoController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();


// routes.get('/', UserController.list);
routes.post('/user', UserController.store);
routes.post('/sessions', SessionControle.store);

routes.use(authMiddleware);

routes.put('/user', UserController.update);

// routes.post('/dadosDeposito', DadosDepositoController.store);
routes.post('/transacao', TrasacaoController.store);
routes.get('/transacao', TrasacaoController.list);


export default routes;
