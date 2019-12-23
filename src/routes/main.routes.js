const express = require("express");
const route = express.Router();
const bodyParser = require('body-parser')

route.use(bodyParser.urlencoded({extended:false}))

const loginRoute =require("./login.routes")
const signupRoute = require('./signup.routes')

route.use(loginRoute)
route.use(signupRoute)


module.exports = route;
