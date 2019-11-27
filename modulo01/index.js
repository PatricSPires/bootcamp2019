const express = require('express');

const server = express();
server.use(express.json())

const users = ['Diego', 'Claudio', 'Victor']

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

server.post('/users', (req, res) => {
  const { name } = req.body;
  users.push(name)
  return res.json(users)
});

server.listen(3000);