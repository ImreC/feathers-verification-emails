const assert = require('assert');
const app = require('../../src/app');

describe('\'verify-email\' service', () => {
  it('registered the service', () => {
    const service = app.service('verify-email');

    assert.ok(service, 'Registered the service');
  });
});
