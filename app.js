const express = require('express');
const app = express();
const port = 3000;

// Rota 1 - Página inicial
app.get('/', (req, res) => {
  res.send('<h1>Bem-vindo !</h1>');
});

// Rota 2 - Página Sobre
app.get('/sobre', (req, res) => {
  res.send('<h1>Sobre Nós</h1><p>Esta é a página sobre.</p>');
});

// Rota 3 - Página Contato
app.get('/contato', (req, res) => {
  res.send('<h1>Contato</h1><p>Entre em contato pelo email: contato@exemplo.com</p>');
});

// Rodar servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
