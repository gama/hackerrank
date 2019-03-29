const assert        = require('assert');
const equalizeArray = require('.');

it('should return return the minimal number of deletions', () => {
    assert.equal(equalizeArray([1]), 0);
    assert.equal(equalizeArray([1, 2]), 1);
    assert.equal(equalizeArray([1, 2, 3]), 2);
    assert.equal(equalizeArray([1, 2, 1]), 1);
    assert.equal(equalizeArray([1, 2, 2, 1]), 2);
    assert.equal(equalizeArray([2, 2, 2, 1]), 1);
    assert.equal(equalizeArray([1, 2, 2, 3]), 2);
    assert.equal(equalizeArray([3, 3, 2, 1, 3]), 2);
});
