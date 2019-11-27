const express = require('express');

const server = express();

const users = ['Diego', 'Claudio', 'Victor']

server.get('/teste', (req, res) => {
  const nome = req.query.nome;
  return res.json({ message: `Hello ${nome}`})
});

server.get('/users/:index', (req, res) => {
  const { index } = req.params;
  return res.json(users[index])
});

server.listen(3000)