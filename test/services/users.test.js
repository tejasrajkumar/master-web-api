const assert = require('assert');
const app = require('../../src/app');

describe('\'state-master\' service', () => {
  it('registered the service', () => {
    const service = app.service('state-master');

    assert.ok(service, 'Registered the service');
  });
});
