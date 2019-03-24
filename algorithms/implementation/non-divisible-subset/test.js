const assert             = require('assert');
const nonDivisibleSubset = require('.');

it('should return the max size of the non-divisible subset', () => {
    assert.equal(nonDivisibleSubset(3, [1, 4, 7]), 3);
    assert.equal(nonDivisibleSubset(3, [2, 5, 8]), 3);
    assert.equal(nonDivisibleSubset(3, [2, 5, 8, 1, 4, 7]), 3);
    assert.equal(nonDivisibleSubset(3, [2, 5, 8, 1, 4, 7, 9]), 4);
    assert.equal(nonDivisibleSubset(3, [2, 5, 8, 1, 4, 7, 9, 12, 15]), 4);
    assert.equal(nonDivisibleSubset(5, [1, 2, 6, 7, 8, 11, 12, 16, 17, 21, 23]), 9);
    assert.equal(nonDivisibleSubset(4, [19, 10, 12, 24, 25, 22]), 3);
    assert.equal(nonDivisibleSubset(3, [1, 7, 2, 4]), 3);
});
