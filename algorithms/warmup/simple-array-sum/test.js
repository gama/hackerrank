const assert         = require('assert');
const simpleArraySum = require('.');

it('should return the sum of the array elements', () => {
    assert(simpleArraySum([])                   === 0);
    assert(simpleArraySum([0])                  === 0);
    assert(simpleArraySum([1])                  === 1);
    assert(simpleArraySum([1, 2])               === 3);
    assert(simpleArraySum([1, 2, 3, 4, 10, 11]) === 31);
});
