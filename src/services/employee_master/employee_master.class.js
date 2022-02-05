const { Service } = require('feathers-knex');

exports.Employee_Master = class Employee_Master extends Service {
  constructor(options) {
    super({
      ...options,
      name: 'employee_master'
    });
  }
};
