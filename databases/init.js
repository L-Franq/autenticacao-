const db = require("./db");

db.run(
  `CREATE TABLE IF NOT EXISTS usuarios(
    idUsuario INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT UNIQUE,
    senha TEXT)`
);
