import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

// CONTROLLERS
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

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
routes.post('/files', upload.single('file'), (req, res) => {
  return res.json({ ok: true });
});

module.exports = routes;
