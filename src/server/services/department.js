const department = require("../../Database/models/Department");
const addDepartment = async dep => await department.create(dep);
const getDepartmentByDcode = async Dcode =>
  await department.findOne({ where: { Dcode: Dcode }, raw: true });
const removeDepartmentByDcode = async Dcode =>
  await department.destroy({ where: { Dcode: Dcode } });

module.exports = {
  addDepartment,
  getDepartmentByDcode,
  removeDepartmentByDcode
};
