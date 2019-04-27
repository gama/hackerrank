const assert    = require('assert');
const swapNodes = require('.');

it('should return the in-order traversal of the swapped trees', () => {
    assert.deepEqual(
        swapNodes([[2, 3], [-1, -1], [-1, -1] ], [1, 1]),
        [[3, 1, 2], [2, 1, 3]]);

    assert.deepEqual(
        swapNodes([[2, 3], [-1, 4], [-1, 5], [-1, -1], [-1, -1]], [2]),
        [[4, 2, 1, 5, 3]]);

    assert.deepEqual(
        swapNodes([[2, 3], [4, -1], [5, -1], [6, -1], [7, 8], [-1, 9], [-1, -1], [10, 11], [-1, -1], [-1, -1], [-1, -1]], [2, 4]),
        [[2, 9, 6, 4, 1, 3, 7, 5, 11, 8, 10], [2, 6, 9, 4, 1, 3, 7, 5, 10, 8, 11]]);
});
