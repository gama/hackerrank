const assert              = require('assert');
const permutationEquation = require('.');

it('should return the permuted array', () => {
    assert.deepEqual(permutationEquation([2, 3, 1]), [2, 3, 1]);
    assert.deepEqual(permutationEquation([4, 3, 5, 1, 2]), [1, 3, 5, 4, 2]);
    assert.deepEqual(permutationEquation([5, 2, 1, 3, 4]), [4, 2, 5, 1, 3]);
});
