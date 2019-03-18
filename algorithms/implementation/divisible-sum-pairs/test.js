const assert            = require('assert');
const divisiblesumPairs = require('.');

it('should return the list of divisible-sum pairs', () => {
    assert.deepEqual(divisiblesumPairs(3, []),  []);
    assert.deepEqual(divisiblesumPairs(3, [1]), []);
    assert.deepEqual(divisiblesumPairs(3, [3]), []);
    assert.deepEqual(divisiblesumPairs(3, [1, 2]), [[0, 1]]);
    assert.deepEqual(divisiblesumPairs(3, [1, 2, 2, 1]), [[0, 1], [0, 2], [1, 3], [2, 3]]);
    assert.deepEqual(divisiblesumPairs(3, [1, 3, 2, 6, 1, 2]), [[0, 2], [0, 5], [1, 3], [2, 4], [4, 5]]);
    assert.deepEqual(divisiblesumPairs(5, [1, 2, 3, 4, 5, 6]), [[0, 3], [1, 2], [3, 5]]);
});
