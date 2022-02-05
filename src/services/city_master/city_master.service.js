const { City_Master } = require('./city_master.class');
const createModel = require('../../models/city_master.model');
const hooks = require('./city_master.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  app.use('/city-master', new City_Master(options, app));

  const service = app.service('city-master');

  service.hooks(hooks);
};
