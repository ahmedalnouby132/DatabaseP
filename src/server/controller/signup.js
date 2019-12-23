const employee = require("../services/employee");
const patient = require("../services/patient");
const config = require("../../../config/config");
const path = require("../../util/path");

const getSignupPage = (req, res) => {
  res.sendFile(path.join(path.viewsPath, "registration.html"));
};

async function register(req, res) {
  try {
    const email = req.body.email;
    const pass = req.body.pass;
    const SSN = req.body.ssn;
    const Occupation = req.body.Occupation;
    let user;
    console.log(email, pass, SSN, Occupation);
    user = await employee.getEmployeeByID(req.body.id || "");
    if (!user) throw "already registerd";
    user = await patient.getPatientByID(req.body.id || "");
    if (!user) throw "already registerd";

    let password = bcrypt.hashSync(pass, config.saltRounds);
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
module.exports = { getSignupPage, register };
