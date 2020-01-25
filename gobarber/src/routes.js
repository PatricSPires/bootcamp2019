import { Router } from 'express';

// CONTROLLERS
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

// USER CONTROLLER METHODS
routes.post('/users', UserController.store);
routes.use(authMiddleware);
routes.put('/users', UserController.update);

// SESSION CONTROLLER METHODS
routes.post('/session', SessionController.store);

module.exports = routes;
