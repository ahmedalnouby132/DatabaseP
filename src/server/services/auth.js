const employee = require("../services/employee");
const Patient = require("../services/patient");
const addToken = require("../services/tokens").addToken;
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { ExpireTime, jwtSecret } = require("../../../config/config");

const authenticate = async params => {
  try {
    let isEmployee = params.isEmployee;
    let user;
    console.log(user);
    if (params.isEmployee) {
      user = await employee.getEmployeeByEmail(params.email);
    } else {
      user = await Patient.getPatientByEmail(params.email);
    }
    if (!user) {
      throw Error("no employee");
    }
    let isVerified = await bcrypt.compare(params.pass || "", user.pass);
    if (isVerified == false) {
      throw Error("wrong password");
    }
    const payload = {
      id: user.id,
      time: new Date()
    };
    var token = await jwt.sign(payload, jwtSecret, {
      expiresIn: ExpireTime
    });
    let tokenObj = await addToken({
      EID: user.ID,
      token,
      expiresAfter: 6,
      isEmployee
    });
    return tokenObj;
  } catch (error) {}
};

module.exports = authenticate;
