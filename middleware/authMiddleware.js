const jwt = require("jsonwebtoken");

const SECRET = "chave_secreta";

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader)
    return res.status(401).json({ erro: "Token nao fornecido." });

  const parts = authHeader.split(" ");

  if (parts.length !== 2)
    return res.status(401).json({ erro: "Token mal formatado." });

  const [schema, token] = parts;

  if (schema !== "Baerer")
    return res.status(401).json({ erro: "Token mal formatado." });

  jwt.verify(token, SECRET, (err, decoded) => {
    if (err) return res.status(401).json({ erro: "Token invalido." });

    //informacao util para o resto da app
    req.userId = decoded.id;

    next();
  });
};
