const assert       = require('assert');
const queensAttack = require('.');

it('should return the number of squares the queen may attack', () => {
    assert.equal(0,  queensAttack(1, 1, 1, []));
    assert.equal(9,  queensAttack(4, 4, 4, []));
    assert.equal(27, queensAttack(8, 4, 4, []));
    assert.equal(24, queensAttack(8, 4, 4, [[3, 5]]));
    assert.equal(10, queensAttack(5, 4, 3, [[5, 5], [4, 2], [2, 3]]));
    assert.equal(0,  queensAttack(8, 1, 1, [[2, 1], [2, 2], [1, 2]]));
    assert.equal(7,  queensAttack(8, 1, 1, [[2, 2], [1, 2]]));
    assert.equal(7,  queensAttack(8, 1, 1, [[2, 1], [1, 2]]));
    assert.equal(3,  queensAttack(8, 2, 2, [[3, 1], [3, 2], [3, 3], [2, 3], [1, 3]]));
    assert.equal(3,  queensAttack(8, 2, 2, [[3, 1], [3, 2], [3, 3], [2, 3], [1, 3], [1, 4]]));
    assert.equal(3,  queensAttack(8, 2, 2, [[3, 1], [3, 2], [3, 3], [2, 3], [1, 3], [4, 4]]));
    assert.equal(5,  queensAttack(8, 7, 6, [[7, 5], [6, 5], [6, 6], [6, 7]]));
    assert.equal(5,  queensAttack(8, 7, 6, [[7, 5], [6, 5], [6, 6], [6, 7], [7, 1], [1, 6], [2, 1]]));
});
