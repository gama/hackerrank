const assert   = require('assert');
const modifiedKaprekarNumbers = require('.');

it('should return the number of kaprekar numbers', () => {
    assert.deepEqual(modifiedKaprekarNumbers(1, 1000),  [1, 9, 45, 55, 99, 297, 703, 999]);
    assert.deepEqual(modifiedKaprekarNumbers(2, 1000),  [9, 45, 55, 99, 297, 703, 999]);
    assert.deepEqual(modifiedKaprekarNumbers(9, 999),   [9, 45, 55, 99, 297, 703, 999]);
    assert.deepEqual(modifiedKaprekarNumbers(9, 998),   [9, 45, 55, 99, 297, 703]);
    assert.deepEqual(modifiedKaprekarNumbers(10, 998),  [45, 55, 99, 297, 703]);
    assert.deepEqual(modifiedKaprekarNumbers(1, 99999), [1, 9, 45, 55, 99, 297, 703, 999, 2223, 2728, 4950, 5050, 7272, 7777, 9999, 17344, 22222, 77778, 82656, 95121, 99999]);
    assert.deepEqual(modifiedKaprekarNumbers(2, 8),     []);
});
