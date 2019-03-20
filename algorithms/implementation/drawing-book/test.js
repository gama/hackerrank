const assert    = require('assert');
const pageCount = require('.');

it('should return the minimum number of page flips', () => {
    assert.equal(pageCount(9, 1), 0);
    assert.equal(pageCount(9, 2), 1);
    assert.equal(pageCount(9, 3), 1);
    assert.equal(pageCount(9, 4), 2);
    assert.equal(pageCount(9, 5), 2);
    assert.equal(pageCount(9, 6), 1);
    assert.equal(pageCount(9, 7), 1);
    assert.equal(pageCount(9, 8), 0);
    assert.equal(pageCount(9, 9), 0);
    assert.equal(pageCount(6, 2), 1);
    assert.equal(pageCount(5, 4), 0);
});
