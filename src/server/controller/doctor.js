const {
  addEmployee,
  getEmployeeBySSN,
  removeEmployeeBySSN,
  getAllDoctors,
  getAllNurses
} = require("../services/employee");
const {
  addDepartment,
  getDepartmentByDcode,
  removeDepartmentByDcode
} = require("../services/department");
const {
  getAllPatient
}=require("../services/patient")
const getDoctorPage = (req, res) => {
  res.status(201).render("./doctor/homepage");
};
const getPatientList = async (req, res) => {
  let data = await getAllPatient();
  res.status(201).render("./doctor/doctorList", {
    data
  });
};
const getNursesList = async (req, res) => {
  let data = await getAllNurses();
  res.status(201).render("./doctor/doctorList", {
    data
  });
};
const getPatientCaseStudy = (req, res) => {
  res.status(201).render("./doctor/Add_Patient_Case_Study");
};
const getAddPatient = (req, res) => {
  res.status(201).render("./doctor/add_Patient");
};
const getAddPrescription = (req, res) => {
  res.status(201).render("./doctor/Add_Prescription");
};
const postPatientCaseStudy = async (req, res) => {
  try {
    if (!(await getEmployeeBySSN(req.ssn))) {
      await addEmployee({
        SSN: req.ssn,
        Occupation: "DOCTOR"
      });
      getDoctorPage();
    }
  } catch (error) {}
};
const postAddPatient = async (req, res) => {
  try {
    if (!(await getEmployeeBySSN(req.ssn))) {
      await addEmployee({
        SSN: req.ssn,
        Occupation: "NURSE"
      });
      getDoctorPage();
    }
    throw Error("existing Nurse");
  } catch (error) {}
};
const postAddPrescription = async (req, res) => {
  try {
    if (!(await getDepartmentByDcode(req.code))) {
      await addDepartment({
        Dname: req.name,
        Dcode: req.code,
        NumOfWorkers: 0
      });
      getDoctorPage();
    }
  } catch (error) {}
};


module.exports = {
    getDoctorPage,
    getNursesList,
    getPatientList,
    getPatientCaseStudy,
    getAddPatient,
    getAddPrescription,
    postPatientCaseStudy,
    postAddPatient,
    postAddPrescription


  };
  