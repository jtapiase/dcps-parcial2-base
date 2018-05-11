import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | BlogSpot', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:blog-spot');
    assert.ok(route);
  });
});
