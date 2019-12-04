import { Router } from 'express';
import UserController from './app/controllers/UserController';

const routes = new Router();

routes.post('/users', UserController.store);

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Patric Pires',
    email: 'patric.pires@outlook.com',
    password_hash: 'oescritoriodetras',
  });
  return res.json(user);
});

export default routes;
