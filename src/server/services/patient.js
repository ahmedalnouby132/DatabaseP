const Patients = require('../../Database/models/Patient')

const addPatient =async user => await Patients.create(user);
const getPatientByEmail =async email => await Patients.findOne({where: {"email": email}});
const getAllPatient =async ()=> await Patients.findAll()

module.exports = {
	addPatient,
	getPatientByEmail,
	getAllPatient
}