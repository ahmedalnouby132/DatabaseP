const employee = require("../../Database/models/employees");
const addEmployee = async user => await employee.create(user);
const getEmployeeByEmail = async email =>
  await employee.findOne({ where: { email: email }, raw: true });

module.exports = {
  addEmployee,
  getEmployeeByEmail
};
