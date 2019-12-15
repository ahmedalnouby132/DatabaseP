const express = require("express");
const sequelize = require("./Database/db");
const route = require("./routes/main.routes");
const server = express();

require('./models/main.model')

server.set('view engine', 'ejs');
server.set('views', 'views');

server.use(route);
const port = 3000;

sequelize
  //.sync({ force: true })
  .sync()
  .then(

server.listen(port)
  )