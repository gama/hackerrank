const assert             = require('assert');
const formingMagicSquare = require('.');

it('should return the minimal cost to convert a matrix into a magic square', () => {
    assert.equal(formingMagicSquare([[2, 7, 6], [9, 5, 1], [4, 3, 8]]), 0);
    assert.equal(formingMagicSquare([[2, 9, 4], [7, 5, 3], [6, 1, 8]]), 0);
    assert.equal(formingMagicSquare([[4, 3, 8], [9, 5, 1], [2, 7, 6]]), 0);
    assert.equal(formingMagicSquare([[4, 9, 2], [3, 5, 7], [8, 1, 6]]), 0);
    assert.equal(formingMagicSquare([[6, 1, 8], [7, 5, 3], [2, 9, 4]]), 0);
    assert.equal(formingMagicSquare([[6, 7, 2], [1, 5, 9], [8, 3, 4]]), 0);
    assert.equal(formingMagicSquare([[8, 1, 6], [3, 5, 7], [4, 9, 2]]), 0);
    assert.equal(formingMagicSquare([[8, 3, 4], [1, 5, 9], [6, 7, 2]]), 0);

    assert.equal(formingMagicSquare([[3, 7, 6], [9, 5, 1], [4, 3, 8]]), 1);
    assert.equal(formingMagicSquare([[2, 7, 4], [7, 5, 3], [6, 1, 8]]), 2);
    assert.equal(formingMagicSquare([[4, 4, 7], [9, 5, 1], [2, 7, 6]]), 2);
    assert.equal(formingMagicSquare([[4, 9, 2], [4, 4, 6], [8, 1, 6]]), 3);
    assert.equal(formingMagicSquare([[5, 1, 8], [7, 4, 3], [2, 9, 3]]), 3);
    assert.equal(formingMagicSquare([[7, 6, 1], [1, 5, 9], [9, 2, 5]]), 6);
    assert.equal(formingMagicSquare([[9, 2, 7], [2, 6, 8], [3, 8, 1]]), 9);
    assert.equal(formingMagicSquare([[7, 2, 5], [2, 6, 8], [7, 6, 3]]), 9);

    assert.equal(formingMagicSquare([[4, 9, 2], [3, 5, 7], [8, 1, 5]]), 1);
    assert.equal(formingMagicSquare([[4, 9, 2], [3, 5, 7], [8, 1, 5]]), 1);
    assert.equal(formingMagicSquare([[4, 8, 2], [4, 5, 7], [6, 1, 6]]), 4);
});
