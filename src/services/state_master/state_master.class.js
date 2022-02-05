const { Service } = require('feathers-knex');

exports.State_Master = class State_Master extends Service {
  constructor(options) {
    super({
      ...options,
      name: 'state_master'
    });
  }
};
