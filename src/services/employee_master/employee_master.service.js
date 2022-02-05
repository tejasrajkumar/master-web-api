const { Employee_Master } = require('./employee_master.class');
const createModel = require('../../models/employee_master.model');
const hooks = require('./employee_master.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  app.use('/employee-master', new Employee_Master(options, app));

  const service = app.service('employee-master');

  service.hooks(hooks);
};
