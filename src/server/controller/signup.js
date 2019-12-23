const employee = require("../services/employee");
const patient = require("../services/patient");
const config = require("../../../config/config");
const path = require("../../util/path");
const bcrypt = require('bcryptjs')
const getSignupPage = (req, res) => {
  res.sendFile(path.join(path.viewsPath, "registration.html"));
};
const addMember = async (req, res) => {
  try {
    const email = req.body.email;
    const pass = req.body.pass;
    const SSN = req.body.ssn;
    const Occupation = req.body.Occupation;
    console.log(email, pass, SSN, Occupation);
    employee.addEmployee({
      email: "" + email,
      pass: "" + pass,
      SSN: "" + SSN,
      Occupation: "" + Occupation
    });
  } catch (err) {}
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
    console.log("1");
    user = await patient.getPatientByEmail(req.body.email || "");
    console.log(user,"HI")
    if (user!= null) {throw Error("already registerd");}
    console.log("2");
    console.log(" ");
    console.log(user, "Hi");
    let password = await bcrypt.hash(pass, config.saltRounds);
    console.log("3");

    if (req.Occupation != patient) {
      return employee
        .addEmployee({
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
module.exports = { getSignupPage, register, addMember };
