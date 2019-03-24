const assert          = require('assert');
const jumpingOnClouds = require('.');

it('should return the minimum number of jumps needed', () => {
    assert.equal(jumpingOnClouds([0, 1, 0, 0, 0, 1, 0]), 3);
    assert.equal(jumpingOnClouds([0, 0, 1, 0, 0, 1, 0]), 4);
    assert.equal(jumpingOnClouds([0, 0, 0, 0, 1, 0]), 3);
    assert.equal(jumpingOnClouds([0, 0, 0, 0, 0, 1, 0]), 3);
    assert.equal(jumpingOnClouds([0, 0, 0, 0]), 2);
    assert.equal(jumpingOnClouds([0, 0, 0, 1, 0]), 2);
});
