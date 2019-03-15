/* eslint-disable indent */

const assert     = require('assert');
const plusMinus = require('.');

it('should return the fraction of positive, negative and zero numbers', () => {
    assert.deepEqual(plusMinus([0]),                  ['0.000000', '0.000000', '1.000000']);
    assert.deepEqual(plusMinus([1]),                  ['1.000000', '0.000000', '0.000000']);
    assert.deepEqual(plusMinus([-1]),                 ['0.000000', '1.000000', '0.000000']);
    assert.deepEqual(plusMinus([0, 1, -1]),           ['0.333333', '0.333333', '0.333333']);
    assert.deepEqual(plusMinus([1, 1, 0, -1, -1]),    ['0.400000', '0.400000', '0.200000']);
    assert.deepEqual(plusMinus([-4, 3, -9, 0, 4, 1]), ['0.500000', '0.333333', '0.166667']);
});
