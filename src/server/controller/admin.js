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
const getAdminPage = (req, res) => {
  res.status(201).render("./admin/Adashboard");
};
const getDoctorList = async (req, res) => {
  let data = await getAllDoctors();
  res.status(201).render("./admin/AdoctorList", {
    data
  });
};
const getNursesList = async (req, res) => {
  res.status(201).render("./admin/AnurseList", {
    data: await getAllNurses()
  });
};
const getDepartmentList = (req, res) => {
  res.status(201).render("./admin/AdepartmentList");
};
const getAddDoctors = (req, res) => {
  res.status(201).render("./admin/add_doctor");
};
const getAddNurses = (req, res) => {
  res.status(201).render("./admin/add_nurse");
};
const getAddDepartment = (req, res) => {
  res.status(201).render("./admin/Aadd_department");
};
const postAddDoctors = async (req, res) => {
  try {
    console.log(req.body.delete)
    if(req.body.delete=="true"){
      return await deleteDoctors(req,res)
    }

    const user = await getEmployeeBySSN(req.body.ssn)
    if ((!user)) {

      await addEmployee({
        SSN: req.body.ssn,
        Occupation: "DOCTOR"
      });
      getAdminPage();
    }
    console.log("notPOSTing");

  } catch (error) {}
};
const postAddNurses = async (req, res) => {
  try {
    if (!(await getEmployeeBySSN(req.body.ssn))) {
      await addEmployee({
        SSN: req.body.ssn,
        Occupation: "NURSE"
      });
      getAdminPage();
    }
    throw Error("existing Nurse");
  } catch (error) {}
};
const postAddDepartment = async (req, res) => {
  try {
    if (!(await getDepartmentByDcode(req.code))) {
      await addDepartment({
        Dname: req.name,
        Dcode: req.code,
        NumOfWorkers: 0
      });
      getAdminPage();
    }
    throw Error("existing Department");
  } catch (error) {}
};

const deleteDoctors = async (req, res) => {
  await removeEmployeeBySSN(req.body.ssn);
  getAdminPage();
};
const deleteNurses = async (req, res) => {
  await removeEmployeeBySSN(req.ssn);
  getAdminPage();
};
const deleteDepartment = async (req, res) => {
  await removeDepartmentByDcode(req.Dcode);
  getAdminPage();
};
module.exports = {
  getAdminPage,
  getDoctorList,
  getNursesList,
  getDepartmentList,
  getAddDoctors,
  getAddNurses,
  getAddDepartment,
  postAddDoctors,
  postAddNurses,
  postAddDepartment,
  deleteDoctors,
  deleteNurses,
  deleteDepartment
};
