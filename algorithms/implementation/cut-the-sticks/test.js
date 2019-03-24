const assert       = require('assert');
const cutTheSticks = require('.');

it('should return the number of sticks on each iteraction', () => {
    assert.deepEqual(cutTheSticks([1]), [1]);
    assert.deepEqual(cutTheSticks([1, 1]), [2]);
    assert.deepEqual(cutTheSticks([1, 1, 1]), [3]);
    assert.deepEqual(cutTheSticks([2, 1, 1, 1]), [4, 1]);
    assert.deepEqual(cutTheSticks([2, 1, 1, 1, 2]), [5, 2]);
    assert.deepEqual(cutTheSticks([1, 3, 4, 4, 5]), [5, 4, 3, 1]);
    assert.deepEqual(cutTheSticks([2, 1, 3, 1, 1, 2]), [6, 3, 1]);
    assert.deepEqual(cutTheSticks([1, 2, 3]), [3, 2, 1]);
    assert.deepEqual(cutTheSticks([5, 4, 4, 2, 2, 8]), [6, 4, 2, 1]);
    assert.deepEqual(cutTheSticks([1, 2, 3, 4, 3, 3, 2, 1]), [8, 6, 4, 1]);
    assert.deepEqual(cutTheSticks([1, 13, 3, 8, 14, 9, 4, 4]), [8, 7, 6, 4, 3, 2, 1]);
});
