import User from './app/models/User';

const { Router } = require('express');

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Patric Pires',
    email: 'patric.pires@outlook.com',
    password_hash: 'oescritoriodetras',
  });
  return res.json(user);
});

export default routes;
