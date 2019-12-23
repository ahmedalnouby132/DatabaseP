const express = require("express");

const signupRoute = express.Router();

const {getSignupPage, register,addMember} = require('../server/controller/signup')

signupRoute.get("/signup", getSignupPage);
signupRoute.post("/signup", register);

module.exports = signupRoute;
