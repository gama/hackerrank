const assert       = require('assert');
const dynamicArray = require('.');

it('should return the values of type 2 queries', () => {
    assert.deepEqual([7, 3], dynamicArray(2, [
        [1, 0, 5],
        [1, 1, 7],
        [1, 0, 3],
        [2, 1, 0],
        [2, 1, 1],
    ]));
});
