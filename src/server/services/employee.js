const employee = require("../../Database/models/employees");
const addEmployee = async user => await employee.create(user);
const getEmployeeByEmail = async email =>
  await employee.findOne({ where: { email: email }, raw: true });
const getEmployeeBySSN = async SSN =>
  await employee.findOne({ where: { SSN: SSN }, raw: true });
const removeEmployeeBySSN = async ssn =>
  await employee.destroy({ where: { SSN: ssn } });
const getAllDoctors = async()=>
  await employee.findAll({where: { Occupation : "DOCTOR"} } )
const updateEmployee =async(user)=>{
const ssn1 =await employee.update({...user},{ where: { SSN: user.SSN }})

}
const getAllNurses = async()=>
  await employee.findAll({where: {Occupation : "NURSE"}})

module.exports = {
  addEmployee,
  updateEmployee,
  getEmployeeByEmail,
  getEmployeeBySSN,
  removeEmployeeBySSN,
  getAllDoctors,
  getAllNurses
};
