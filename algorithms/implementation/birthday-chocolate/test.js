const assert   = require('assert');
const birthday = require('.');

it('should return the number of chocolate bar segments', () => {
    assert.deepEqual(birthday([2],                2, 1), [[2]]);
    assert.deepEqual(birthday([2],                1, 1), []);
    assert.deepEqual(birthday([2, 1],             3, 1), []);
    assert.deepEqual(birthday([2, 1],             3, 2), [[2, 1]]);
    assert.deepEqual(birthday([1, 2, 2, 3, 1],    4, 2), [[2, 2], [3, 1]]);
    assert.deepEqual(birthday([1, 2, 2, 3, 1],    5, 2), [[2, 3]]);
    assert.deepEqual(birthday([1, 2, 2, 3, 1],    5, 3), [[1, 2, 2]]);
    assert.deepEqual(birthday([1, 2, 2, 3, 1, 1], 5, 3), [[1, 2, 2], [3, 1, 1]]);
    assert.deepEqual(birthday([1, 2, 1, 3, 2],    3, 2), [[1,2], [2,1]]);
    assert.deepEqual(birthday([1, 1, 1, 1, 1, 1], 3, 2), []);
    assert.throws((() => birthday([1], 1, 2)), { name: /^AssertionError/ });
});
