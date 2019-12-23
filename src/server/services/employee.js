const employee = require('../../Database/models/employees')
const addEmployee = user => employee.create(user);
const getEmployeeByID = id => employee.findOne({where: {"ID": id},raw: true});

module.exports = {
	addEmployee,
	getEmployeeByID
}