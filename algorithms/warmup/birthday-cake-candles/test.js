const assert              = require('assert');
const birthdayCakeCandles = require('.');

it('should return the number of blowable candles', () => {
    assert.equal(birthdayCakeCandles([1]),          1);
    assert.equal(birthdayCakeCandles([1, 2]),       1);
    assert.equal(birthdayCakeCandles([1, 2, 2]),    2);
    assert.equal(birthdayCakeCandles([2, 2, 1]),    2);
    assert.equal(birthdayCakeCandles([2, 1, 2]),    2);
    assert.equal(birthdayCakeCandles([2, 2, 2]),    3);
    assert.equal(birthdayCakeCandles([3, 2, 1, 3]), 2);
    assert.equal(birthdayCakeCandles([4, 4, 1, 3]), 2);
    assert.equal(birthdayCakeCandles([1, 4, 4, 3]), 2);
});
