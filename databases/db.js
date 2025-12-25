const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./usuarios.db", (err) => {
  if (err) console.log(err, message);
  else console.log("Conectado com sucesso");
});

module.exports = db;
