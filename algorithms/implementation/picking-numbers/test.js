const assert         = require('assert');
const pickingNumbers = require('.');

it('should return the maximum length of the subset array with consecutive numbers', () => {
    assert.equal(pickingNumbers([1, 3]), 1);
    assert.equal(pickingNumbers([1, 2]), 2);
    assert.equal(pickingNumbers([1, 2, 1]), 3);
    assert.equal(pickingNumbers([1, 4, 2, 1]), 3);
    assert.equal(pickingNumbers([1, 4, 2, 4, 1, 5, 8, 5, 8, 3]), 4);
    assert.equal(pickingNumbers([1, 1, 2, 2, 4, 4, 5, 5, 5]), 5);
    assert.equal(pickingNumbers([4, 6, 5, 3, 3, 1]), 3);
    assert.equal(pickingNumbers([1, 2, 2, 3, 1, 2]), 5);
});
