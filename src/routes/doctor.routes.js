const doctor = require("express").Router();
const checkAuth = require('../Middleware/auth')
const {
  getDoctorPage,
  getPatientList,
  getPatientCaseStudy,
  getAddPatient,
  getAddPrescription,
  postPatientCaseStudy,
  postAddPatient,
  postAddPrescription,
  }= require("../server/controller/doctor")


  
const isEmployee = async(req,res,next)=>{
  if(req.user.Occupation!="ADMIN")
  {
    next()
  }
  else
  {
    res.render("./error/404")
  }
}
doctor.get("/doctor",checkAuth, isEmployee,getDoctorPage);
doctor.get("/doctor/patient", checkAuth,isEmployee,getPatientList);
doctor.get("/doctor/AddPatient",checkAuth,isEmployee, getAddPatient);
doctor.get("/doctor/PatientCaseStudy",checkAuth,isEmployee,   getPatientCaseStudy);
doctor.get("/doctor/AddPrescription",checkAuth,isEmployee, getAddPrescription);
doctor.post("/doctor/PatientCaseStudy",checkAuth,isEmployee, postPatientCaseStudy);
doctor.post("/doctor/AddPatient",checkAuth,isEmployee, postAddPatient);
doctor.post("/doctor/AddPrescription",checkAuth,isEmployee, postAddPrescription);

module.exports = doctor;

