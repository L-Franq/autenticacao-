const express = require("express");
//const path = require("path");
const app = express();

app.use(express.json());
app.use(express.static("public"));

require("./databases/init");

const authRoutes = require("./routes/authRoutes");

app.use("/auth", authRoutes);

module.exports = app;
