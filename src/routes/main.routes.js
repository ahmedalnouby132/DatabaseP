const express = require("express");
const route = express.Router();
const bodyParser = require('body-parser')

route.use(bodyParser.urlencoded({extended:false}))
const doctor = require("./doctor.routes")
const loginRoute =require("./login.routes")
const signupRoute = require('./signup.routes')
const admin = require('./admin.routes')
const uploadApp =require("../server/controller/upload")
route.use(doctor)
route.use(loginRoute)
route.use(signupRoute)
route.use(admin)
route.use(uploadApp)

module.exports = route;
