import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

// CONTROLLERS
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';
import ProviderController from './app/controllers/ProviderController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

// USER CONTROLLER METHODS
routes.post('/users', UserController.store);
routes.use(authMiddleware);
routes.put('/users', UserController.update);

// SESSION CONTROLLER METHODS
routes.post('/session', SessionController.store);

// UPLOAD METHODS
routes.post('/files', upload.single('file'), FileController.store);

// PROVIDERS METHODS
routes.get('/providers', ProviderController.index);

module.exports = routes;
