const express = require("express");

const loginRoute = express.Router();

const {getLoginPage, Login} = require('../server/controller/login')

loginRoute.get("/login", getLoginPage);
loginRoute.post("/login", Login);

module.exports = loginRoute;
