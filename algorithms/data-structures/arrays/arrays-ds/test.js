const assert       = require('assert');
const reverseArray = require('.');

it('should return the reversed array', () => {
    assert.deepEqual(reverseArray([]), []);
    assert.deepEqual(reverseArray([0]), [0]);
    assert.deepEqual(reverseArray([0, 1]), [1, 0]);
    assert.deepEqual(reverseArray([0, 1, 2, 3]), [3, 2, 1, 0]);
});
