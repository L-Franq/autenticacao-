const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const user = require("../models/user.model");

const SECRET = "chave_secreta";

exports.register = (req, res) => {
  const { email, senha } = req.body;

  const hash = bcrypt.hashSync(senha, 10);

  user.createUser(email, hash, (err) => {
    if (err) return res.status(400).json({ erro: "Usuario Ja existe." });

    res.json({ mensagem: "Usuario Criado." });
  });
};

exports.login = (req, res) => {
  const { email, senha } = req.body;

  user.findByEmail(email, (err, user) => {
    if (!user) return res.status(401).json({ erro: "Credenciais Invalidas." });

    const ok = bcrypt.compareSync(senha, user.senha);

    if (!ok) return res.status(401).json({ erro: "Credenciais Invalidas." });

    const token = jwt.sign({ id: user.id }, SECRET, { expiresIn: "1h" });

    res.json({ token });
  });
};
