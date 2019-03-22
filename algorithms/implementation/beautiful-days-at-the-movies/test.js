const assert        = require('assert');
const beautifulDays = require('.');

it('should return', () => {
    assert.equal(beautifulDays(10, 11, 2), 1);
    assert.equal(beautifulDays(10, 12, 2), 1);
    assert.equal(beautifulDays(10, 13, 2), 2);
    assert.equal(beautifulDays(10, 14, 2), 2);
    assert.equal(beautifulDays(10, 15, 2), 3);
    assert.equal(beautifulDays(11, 15, 2), 3);
    assert.equal(beautifulDays(20, 23, 6), 2);
    assert.equal(beautifulDays(100, 1000, 9), (1000 - 100 + 1));
    assert.equal(beautifulDays(500, 5000, 6), (5000 - 500) / 2);
});
