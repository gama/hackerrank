/* eslint-disable indent */

const assert     = require('assert');
const miniMaxSum = require('.');

it('should return the mini & max sum', () => {
    assert.deepEqual(miniMaxSum([1, 1, 1, 1, 1]), [ 4,  4]);
    assert.deepEqual(miniMaxSum([2, 2, 3, 1, 2]), [ 7,  9]);
    assert.deepEqual(miniMaxSum([1, 2, 3, 4, 5]), [10, 14]);
    assert.deepEqual(miniMaxSum([1, 3, 5, 7, 9]), [16, 24]);
});
