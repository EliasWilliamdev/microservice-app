const express = require('express');
const authenticateToken = require('./authMiddleware');
const app = express();
const PORT = 3003;

app.get('/orders', (req, res) => {
  res.send({ message: 'Order Service: Listando pedidos!' });
});

app.listen(PORT, () => {
  console.log(`Order service rodando na porta ${PORT}`);
});
