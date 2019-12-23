const department = require('./Department')
const employee=  require('./employees')
const Patient = require('./Patient')
const tokens = require('./token')

department.hasMany(employee, { foreignKey: 'Dcode' });
department.hasMany(Patient, { foreignKey: 'Dcode' });  
Patient.hasMany(tokens,{ foreignKey: 'EID' }); 
employee.hasMany(tokens,{ foreignKey: 'EID' }); 
