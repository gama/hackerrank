const assert                = require('assert');
const circularArrayRotation = require('.');

it('should return the response to the queries after the rotations', () => {
    assert.deepEqual(circularArrayRotation([1, 2, 3], 0, [0,1,2]), [1, 2, 3]);
    assert.deepEqual(circularArrayRotation([1, 2, 3], 1, [0,1,2]), [3, 1, 2]);
    assert.deepEqual(circularArrayRotation([1, 2, 3], 2, [0,1,2]), [2, 3, 1]);
    assert.deepEqual(circularArrayRotation([6, 7, 8, 9], 0, [3, 2, 1, 0]), [9, 8, 7, 6]);
    assert.deepEqual(circularArrayRotation([6, 7, 8, 9], 1, [3, 2, 1, 0]), [8, 7, 6, 9]);
    assert.deepEqual(circularArrayRotation([6, 7, 8, 9], 2, [3, 2, 1, 0]), [7, 6, 9, 8]);
    assert.deepEqual(circularArrayRotation([6, 7, 8, 9], 3, [3, 2, 1, 0]), [6, 9, 8, 7]);
    assert.deepEqual(circularArrayRotation([6, 7, 8, 9], 4, [3, 2, 1, 0]), [9, 8, 7, 6]);
    assert.deepEqual(circularArrayRotation([6, 7, 8, 9], 5, [3, 2, 1, 0]), [8, 7, 6, 9]);
});
