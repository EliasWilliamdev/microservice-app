const jwt = require('jsonwebtoken');
const SECRET_KEY = 'minha_chave_secreta';

const authenticateToken = (req, res, next) => {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(403).json({ message: 'Token não fornecido' });
  }

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Token inválido ou expirado' });
    }
    req.user = user; // Adiciona o usuário decodificado à requisição
    next();
  });
};

module.exports = authenticateToken;
