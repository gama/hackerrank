const assert      = require('assert');
const rotateArray = require('.');

it('should return rotate the array', () => {
    assert.deepEqual(rotateArray([1, 2, 3, 4, 5], 0), [1, 2, 3, 4, 5]);
    assert.deepEqual(rotateArray([1, 2, 3, 4, 5], 1), [2, 3, 4, 5, 1]);
    assert.deepEqual(rotateArray([1, 2, 3, 4, 5], 2), [3, 4, 5, 1, 2]);
    assert.deepEqual(rotateArray([1, 2, 3, 4, 5], 3), [4, 5, 1, 2, 3]);
    assert.deepEqual(rotateArray([1, 2, 3, 4, 5], 4), [5, 1, 2, 3, 4]);
    assert.deepEqual(rotateArray([1, 2, 3, 4, 5], 5), [1, 2, 3, 4, 5]);
    assert.deepEqual(rotateArray([1, 2, 3, 4, 5], 6), [2, 3, 4, 5, 1]);
});
