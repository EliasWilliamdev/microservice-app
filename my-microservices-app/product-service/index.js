const express = require('express');
const authenticateToken = require('./authMiddleware');
const app = express();
const PORT = 3002;

app.get('/products', (req, res) => {
  res.send({ message: 'Product Service: Listando produtos!' });
});

app.listen(PORT, () => {
  console.log(`Product service rodando na porta ${PORT}`);
});
