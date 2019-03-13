const assert         = require('assert');
const simpleArraySum = require('.');

it('should compare the triplets', () => {
    assert.deepEqual(simpleArraySum([1,1,1], [1,1,1]),             [0, 0]);
    assert.deepEqual(simpleArraySum([2,2,2], [1,1,1]),             [3, 0]);
    assert.deepEqual(simpleArraySum([1,1,1], [3,3,3]),             [0, 3]);
    assert.deepEqual(simpleArraySum([2,2,1], [1,1,1]),             [2, 0]);
    assert.deepEqual(simpleArraySum([1,2,2], [1,1,1]),             [2, 0]);
    assert.deepEqual(simpleArraySum([1,2,1], [1,1,1]),             [1, 0]);
    assert.deepEqual(simpleArraySum([1,1,1], [2,2,1]),             [0, 2]);
    assert.deepEqual(simpleArraySum([1,1,1], [1,2,2]),             [0, 2]);
    assert.deepEqual(simpleArraySum([1,1,1], [1,2,1]),             [0, 1]);
    assert.deepEqual(simpleArraySum([2,1,1], [1,1,2]),             [1, 1]);
    assert.deepEqual(simpleArraySum([100,100,100], [1,1,1]),       [3, 0]);
    assert.deepEqual(simpleArraySum([100,100,100], [100,100,100]), [0, 0]);
    assert.deepEqual(simpleArraySum([100,100,100], [100,100,100]), [0, 0]);
    assert.deepEqual(simpleArraySum([5,6,7], [3,6,10]),            [1, 1]);
    assert.deepEqual(simpleArraySum([17,28,30], [99,16,8]),        [2, 1]);
});
