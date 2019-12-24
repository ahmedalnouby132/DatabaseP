const employee = require("../services/employee");
const patient = require("../services/patient");
const config = require("../../../config/config");
const path = require("../../util/path");
const bcrypt = require('bcryptjs')
const getSignupPage = (req, res) => {
  res.render('registration');
};

async function register(req, res) {
  try {
    const email = req.body.email;
    const pass = req.body.pass;
    const SSN = req.body.ssn;
    const Occupation = req.body.Occupation;
    let user;
    console.log(email, pass, SSN, Occupation);
    user = await employee.getEmployeeByEmail(req.body.email || "");
    if (user!= null) {throw Error("already registerd");}
    user = await patient.getPatientByEmail(req.body.email || "");
    if (user!= null) {throw Error("already registerd");}
    user = await employee.getEmployeeBySSN(req.body.ssn)
    if (user == null) {throw Error("ssn not valid ")}
    console.log(user, "Hi");
    let password = await bcrypt.hash(pass, config.saltRounds);

    if (req.Occupation != patient) {
      return employee
        .updateEmployee({
          email: "" + email,
          pass: "" + password,
          SSN: "" + SSN,
          Occupation: "" + Occupation
        })
        .then(() => res.send({ success: true }));
    } else {
      return patient
        .addPatient({
          email: "" + email,
          pass: "" + password,
          SSN: "" + SSN
        })
        .then(() => res.send({ success: true }));
    }
  } catch (err) {
    return res.send({
      success: false,
      message: "Registration failed. User with this email already registered."
    });
  }
}
module.exports = { getSignupPage, register };
