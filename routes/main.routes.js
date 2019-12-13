const express = require("express");
const route = express.Router();
const path = require("path");
const bodyParser = require('body-parser')

route.use(bodyParser.urlencoded({extended:false}))

route.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "views", "home.html"));
});

route.post("/login", async (req, res) => {

});

module.exports = route;
