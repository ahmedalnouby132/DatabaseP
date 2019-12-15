const employee = require("../models/employees");
const join = require("../util/path");

const getSignupPage = (req, res) => {
  res.sendFile(join(__dirname, "..", "views", "registration.html"));
};
const addMember = async (req, res) => {
  try {
    const email = req.body.email;
    const pass = req.body.pass;
    const SSN = req.body.ssn;
    const Occupation = req.body.Occupation;
    console.log(email, pass, SSN, Occupation);
    employee.create({ 
        email: ''+ email,
        pass: ''+pass,
        SSN: ''+SSN,
        Occupation: ''+Occupation
    });
  } catch (err) {}
};

module.exports = { getSignupPage, addMember };
