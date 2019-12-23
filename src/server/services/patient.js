const Patients = require('../../Database/models/Patient')

const addPatient = user => patient.create(user);
const getPatientByID = id => patient.findOne({where: {"ID": id}});

module.exports = {
	addPatient,
	getPatientByID
}