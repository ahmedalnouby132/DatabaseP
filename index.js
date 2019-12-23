const express = require("express");
const sequelize = require("./src/Database/db");
const route = require("./src/routes/main.routes");
const session = require('express-session')
require("./src/Database/models/main.model");
const {mySecret} = require('./config/config')

const server = express()

server.use(express.static("public"))

server.set("view engine", "ejs");
server.set("views", "views");
server.use(
  session({secret:mySecret,resave:false,saveUninitialized:false})
)


server.use(route);
const port = 3000;

sequelize
  //.sync({ force: true })
  .sync()
  .then(server.listen(port));
