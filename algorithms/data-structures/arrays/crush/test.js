const assert            = require('assert');
const arrayManipulation = require('.');

it('should return the max value after processing the queries', () => {
    assert.equal(10,   arrayManipulation(10, [[1, 5, 3], [4, 8, 7], [6, 9, 1]]));
    assert.equal(3,    arrayManipulation(5,  [[2, 3, 2], [1, 2, 1]]));
    assert.equal(3,    arrayManipulation(5,  [[1, 2, 1], [2, 3, 2]]));
    assert.equal(3,    arrayManipulation(5,  [[2, 3, 1], [3, 4, 2]]));
    assert.equal(6,    arrayManipulation(5,  [[1, 3, 1], [2, 3, 2], [3, 4, 3]]));
    assert.equal(6,    arrayManipulation(10, [[1, 3, 1], [2, 3, 2], [3, 4, 3]]));
    assert.equal(200,  arrayManipulation(5,  [[1, 2, 100], [2, 5, 100], [3, 4, 100]]));
    assert.equal(200,  arrayManipulation(5,  [[1, 2, 100], [2, 5, 100], [3, 4, 100]]));
    assert.equal(1958, arrayManipulation(40, [[29, 40, 787], [9, 26, 219], [21, 31, 214], [8, 22, 719], [15, 23, 102], [11, 24, 83], [14, 22, 321], [5, 22, 300]]));
});
