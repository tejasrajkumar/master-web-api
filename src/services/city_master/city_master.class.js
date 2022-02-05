const { Service } = require('feathers-knex');

exports.City_Master = class City_Master extends Service {
  constructor(options) {
    super({
      ...options,
      name: 'city_master'
    });
  }
};
