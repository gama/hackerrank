const assert    = require('assert');
const pageCount = require('.');

it('should return', () => {
    assert.equal(pageCount(), 1);
});
