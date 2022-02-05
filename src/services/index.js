const stateMaster = require('./state_master/state_master.service.js');
const cityMaster = require('./city_master/city_master.service.js');
const employeeMaster = require('./employee_master/employee_master.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(stateMaster);
  app.configure(cityMaster);
  app.configure(employeeMaster);
};
