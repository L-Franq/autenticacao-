const db = require("../databases/db");

exports.createUser = (email, senha, callback) => {
  db.run(
    "INSERT INTO usuarios(email, senha) VALUES(?, ?)",
    [email, senha],
    callback
  );
};

exports.findByEmail = (email, callback) => {
  db.get("SELECT * FROM usuarios WHERE email = ?", [email], callback);
};
