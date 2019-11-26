const express = require('express');

const server = express();

server.get('/teste', (req, res) => {
  const nome = req.query.nome;
  return res.json({ message: `Hello ${nome}`})
});

server.get('/users/:id', (req, res) => {
  const { id } = req.params;
  return res.json({ message: `Buscando usuário ${id}`})
});

server.listen(3000)