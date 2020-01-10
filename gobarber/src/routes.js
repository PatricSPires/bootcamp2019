import { Router } from 'express';

// CONTROLLERS
import UserController from './app/controllers/User';

const routes = new Router();

// USER CONTROLLER METHODS
routes.post('/users', UserController.store);

module.exports = routes;
