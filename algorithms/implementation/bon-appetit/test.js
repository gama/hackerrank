const assert     = require('assert');
const bonAppetit = require('.');

it('should return', () => {
    assert.equal(bonAppetit([1, 2], 0, 1), 'Bon Appetit');
    assert.equal(bonAppetit([1, 2], 0, 3), 2);
    assert.equal(bonAppetit([4, 2], 1, 2), 'Bon Appetit');
    assert.equal(bonAppetit([4, 2], 1, 3), 1);
    assert.equal(bonAppetit([1, 2, 2], 2, 1.5), 'Bon Appetit');
    assert.equal(bonAppetit([1, 2, 2], 2, 2), 0.5);
    assert.equal(bonAppetit([3, 10, 2, 9], 1, 12), 5);
    assert.equal(bonAppetit([3, 10, 2, 9], 1, 7), 'Bon Appetit');
});
