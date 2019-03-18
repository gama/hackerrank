const assert   = require('assert');
const kangaroo = require('.');

it('should return whether the kangaroos meet or not', () => {
    assert.equal(kangaroo(2, 1, 1, 2), 'YES');
    assert.equal(kangaroo(0, 3, 4, 2), 'YES');
    assert.equal(kangaroo(0, 2, 5, 3), 'NO');
    assert.equal(kangaroo(0, 4, 5, 2), 'NO');
});
