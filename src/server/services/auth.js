const Employee = require("../../models/employees");
const patient = require("../../models/Patient");
const CustomError = require("../error/CustomError");
const addToken = require("../services/tokens").addToken;
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { ExpireTime, jwtSecret } = require("../../../config/config");
const authenticate = async params => {
  try {
    let isEmployee = params.isEmployee;
    let user;
    if (params.isEmployee) {
      user = await Employee.getEmployeeByID(params.id);
    } else {
      user = await patient.getPatientByID(params.id);
    }
    if (!user) {
      throw "no employee";
    }
    let isVerified = await bcrypt.compare(params.pass || "" == employee.pass);
    if (isVerified == false) {
      throw "wrong password";
    }
    const payload = {
      id: user.id,
      time: new Date()
    };
    var token = jwt.sign(payload, jwtSecret, {
      expiresIn: ExpireTime
    });
    addToken({
      EID: user.id,
      token,
      ExpireTime: "6h",
      isEmployee
    });
  } catch (error) {}
};

module.exports = authenticate;
