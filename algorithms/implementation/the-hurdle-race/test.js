const assert     = require('assert');
const hurdleRace = require('.');

it('should return the number of potions that Dan must take', () => {
    assert.equal(hurdleRace(2, [1]), 0);
    assert.equal(hurdleRace(2, [2]), 0);
    assert.equal(hurdleRace(2, [1, 2, 2]), 0);
    assert.equal(hurdleRace(2, [3]), 1);
    assert.equal(hurdleRace(2, [5, 4, 3]), 3);
    assert.equal(hurdleRace(1, [1, 2, 3, 3, 2]), 2);
    assert.equal(hurdleRace(4, [1, 6, 3, 5, 2]), 2);
    assert.equal(hurdleRace(7, [2, 5, 4, 5, 2]), 0);
});
