const assert     = require('assert');
const findDigits = require('.');

it('should return the number of divisor digits', () => {
    assert.equal(findDigits(8), 1);
    assert.equal(findDigits(24), 2);
    assert.equal(findDigits(34), 0);
    assert.equal(findDigits(444), 3);
    assert.equal(findDigits(283), 0);
    assert.equal(findDigits(12), 2);
    assert.equal(findDigits(1012), 3);
    assert.equal(findDigits(2423), 0);
});
