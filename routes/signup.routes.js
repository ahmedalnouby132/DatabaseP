const express = require("express");

const signupRoute = express.Router();

const {getSignupPage, addMember} = require('../controller/signup')

signupRoute.get("/signup", getSignupPage);
signupRoute.post("/signup", addMember);

module.exports = signupRoute;
