const assert         = require('assert');
const migratoryBirds = require('.');

it('should return the most often seen migratory bird type', () => {
    assert.equal(migratoryBirds([1]), 1);
    assert.equal(migratoryBirds([5]), 5);
    assert.equal(migratoryBirds([1, 2]), 1);
    assert.equal(migratoryBirds([2, 1]), 1);
    assert.equal(migratoryBirds([3, 2]), 2);
    assert.equal(migratoryBirds([3, 2, 3]), 3);
    assert.equal(migratoryBirds([3, 2, 3, 2]), 2);
    assert.equal(migratoryBirds([1, 1, 2, 2, 3]), 1);
    assert.equal(migratoryBirds([1, 4, 4, 4, 5, 3]), 4);
    assert.equal(migratoryBirds([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4]), 3);
});
