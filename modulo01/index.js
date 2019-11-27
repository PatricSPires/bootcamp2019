const express = require('express');

const server = express();
server.use(express.json())

const users = ['Diego', 'Claudio', 'Victor']

server.use((req, res, next) => {
  console.time('Request')
  console.log(`Método: ${req.method} - URL: ${req.url}`);
  next();
  console.timeEnd('Request')
});

function checkUsersExists(req, res, next) {
  if(!req.body.name){
    return res.status(400).json({ error: 'USer name is required'});
  }
  return next();
}

server.get('/users', (req, res) => {
  return res.json(users)
});

server.get('/teste', (req, res) => {
  const nome = req.query.nome;
  return res.json({ message: `Hello ${nome}`})
});

server.get('/users/:index', (req, res) => {
  const { index } = req.params;
  return res.json(users[index])
});

server.post('/users', checkUsersExists, (req, res) => {
  const { name } = req.body;
  users.push(name)
  return res.json(users)
});

server.put('/users/:index', checkUsersExists, (req, res) => {
  const { index } = req.params;
  const { name } = req.body;
  users[index] = name;
  return res.json(users)
});

server.delete('/users/:index', (req, res) => {
  const { index } = req.params;
  users.splice(index, 1);
  return res.send('Usuário excluido com sucesso.')
});

server.listen(3000);