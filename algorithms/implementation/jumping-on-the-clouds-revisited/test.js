const assert          = require('assert');
const jumpingOnClouds = require('.');

it('should return the final energy level', () => {
    assert.equal(jumpingOnClouds([0, 1], 1), 96);
    assert.equal(jumpingOnClouds([0, 1], 2), 99);
    assert.equal(jumpingOnClouds([1, 1], 2), 97);
    assert.equal(jumpingOnClouds([0, 0, 0, 0, 0, 0], 3), 98);
    assert.equal(jumpingOnClouds([0, 0, 0, 1, 0, 0], 3), 96);
    assert.equal(jumpingOnClouds([1, 0, 0, 1, 0, 0], 3), 94);
    assert.equal(jumpingOnClouds([1, 0, 0, 1, 0, 0], 2), 95);
    assert.equal(jumpingOnClouds([0, 0, 1, 0], 2), 96);
    assert.equal(jumpingOnClouds([0, 0, 1, 0, 0, 1, 1, 0], 2), 92);
    assert.equal(jumpingOnClouds([1, 1, 1, 0, 1, 1, 0, 0, 0, 0], 3), 94);
});
