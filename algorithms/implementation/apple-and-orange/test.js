const assert                = require('assert');
const countApplesAndOranges = require('.');

it('should return the number of apples and oranges within the house\'s range', () => {
    assert.deepEqual(countApplesAndOranges(7, 10, 4, 12, [2, 3, -4], [3, -2, -4]), [1, 2]);
    assert.deepEqual(countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]),     [1, 1]);
    assert.deepEqual(countApplesAndOranges(3, 5,  1, 7,  [-1, 0, 1, 2, 3, 4, 5], [-5, -4, -3, -2, -1, 0, 1]), [3, 3]);
});
