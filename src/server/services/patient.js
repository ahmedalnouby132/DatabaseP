const Patients = require('../../Database/models/Patient')

const addPatient =async user => await Patients.create(user);
const getPatientByEmail =async email => await Patients.findOne({where: {"email": email}});
module.exports = {
	addPatient,
	getPatientByEmail
}