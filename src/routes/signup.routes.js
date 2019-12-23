const express = require("express");

const signupRoute = express.Router();

const {getSignupPage, register} = require('../server/controller/signup')

signupRoute.get("/signup", getSignupPage);
signupRoute.post("/signup", register);

module.exports = signupRoute;
