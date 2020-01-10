import { Router } from 'express';

// CONTROLLERS
import UserController from './app/controllers/User';
import SessionController from './app/controllers/SessionController';

const routes = new Router();

// USER CONTROLLER METHODS
routes.post('/users', UserController.store);
// SESSION CONTROLLER METHODS
routes.post('/session', SessionController.store);

module.exports = routes;
