/* eslint-disable indent */

const assert             = require('assert');
const diagonalDifference = require('.');

it('should return the absolute difference of the diagonals', () => {
    assert.equal(0,  diagonalDifference([[1]]));
    assert.equal(9,  diagonalDifference([[4, 8], [7, 2]]));
    assert.equal(32, diagonalDifference([[ 1,  2,  3],
                                         [ 5,  8, 13],
                                         [21, 34, 55]]));
    assert.equal(15, diagonalDifference([[11, 2,   4],
                                         [ 4, 5,   6],
                                         [10, 8, -12]]));
    assert.equal(4,  diagonalDifference([[  1,   2,   3,   4],
                                         [ -5,  -6,  -7,  -8],
                                         [  9,  10,  11,  12],
                                         [-13, -14, -15, -16]]));
});
