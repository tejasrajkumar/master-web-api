const { State_Master } = require('./state_master.class');
const createModel = require('../../models/state_master.model');
const hooks = require('./state_master.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  app.use('/state-master', new State_Master(options, app));

  const service = app.service('state-master');

  service.hooks(hooks);
};
