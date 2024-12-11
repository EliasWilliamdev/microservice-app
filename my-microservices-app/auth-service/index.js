const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
const PORT = 3001;

// Middleware para parse de JSON
app.use(express.json());

// Chave secreta (em produção, armazene de forma segura)
const SECRET_KEY = 'minha_chave_secreta';

// Endpoint de login (exemplo básico)
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Simulação de verificação de credenciais
  if (username === 'usuario' && password === 'senha') {
    // Geração do token JWT
    const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: '1h' });
    return res.json({ token });
  } else {
    return res.status(401).json({ message: 'Credenciais inválidas' });
  }
});

app.listen(PORT, () => {
  console.log(`Auth service rodando na porta ${PORT}`);
});
