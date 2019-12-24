const admin = require("express").Router();
const checkAuth = require('../Middleware/auth')
const {
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
} = require("../server/controller/admin");

const isAdmin = async(req,res,next)=>{
  if(req.user.Occupation=="ADMIN")
  {
    next()
  }
  else
  {
    res.render("./error/404")
  }
}

admin.get("/admin",checkAuth, isAdmin,getAdminPage);

admin.get("/admin/doctors", checkAuth,isAdmin,getDoctorList);
admin.post("/admin/doctors",checkAuth,isAdmin,postAddDoctors);

admin.get("/admin/nurses",checkAuth,isAdmin, getNursesList);
admin.post("/admin/nurses",checkAuth,isAdmin, postAddNurses);

admin.get("/admin/department",checkAuth,isAdmin, getDepartmentList);
admin.get("/admin/addDepartment",checkAuth,isAdmin, getAddDepartment);
admin.post("/admin/addDepartment",checkAuth,isAdmin, postAddDepartment);

admin.delete("/admin/deleteDoctors",checkAuth,isAdmin, deleteDoctors);
admin.delete("/admin/deleteNurses",checkAuth,isAdmin, deleteNurses);
admin.delete("/admin/deleteDepartment",checkAuth,isAdmin, deleteDepartment);

module.exports = admin;
