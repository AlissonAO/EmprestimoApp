import { Router } from 'express';

const routes = new Router();


routes.get('/', (req, res) => res.json({ mensaagem: 'hello word' }));

module.exports = routes;
