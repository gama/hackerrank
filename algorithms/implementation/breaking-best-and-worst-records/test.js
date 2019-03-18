const assert          = require('assert');
const breakingRecords = require('.');

it('should return the number of times best & worst records were broken', () => {
    assert.deepEqual(breakingRecords([1]),       [0, 0]);
    assert.deepEqual(breakingRecords([1, 2]),    [1, 0]);
    assert.deepEqual(breakingRecords([1, 2, 0]), [1, 1]);
    assert.deepEqual(breakingRecords([1, 0, 2]), [1, 1]);
    assert.deepEqual(breakingRecords([1, 2, 3]), [2, 0]);
    assert.deepEqual(breakingRecords([3, 2, 1]), [0, 2]);
    assert.deepEqual(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]), [2, 4]);
    assert.deepEqual(breakingRecords([3, 4, 21, 36, 10, 28, 35, 5, 24, 42]), [4, 0]);
});
