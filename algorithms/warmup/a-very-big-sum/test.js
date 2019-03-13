const assert      = require('assert');
const aVeryBigSum = require('.');

it('should return the sum of the (potentially large) array elements', () => {
    assert(aVeryBigSum([])  === 0);
    assert(aVeryBigSum([0]) === 0);
    assert(aVeryBigSum([1]) === 1);
    assert(aVeryBigSum([1, 2, 3, 4]) === 10);
    assert(aVeryBigSum([
        1000000001,
        1000000002,
        1000000003,
        1000000004,
        1000000005
    ]) === 5000000015);
});
