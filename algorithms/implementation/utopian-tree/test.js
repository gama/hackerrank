const assert      = require('assert');
const utopianTree = require('.');

it('should return the height of the utopian tree', () => {
    assert.equal(utopianTree(0), 1);
    assert.equal(utopianTree(1), 2);
    assert.equal(utopianTree(2), 3);
    assert.equal(utopianTree(3), 6);
    assert.equal(utopianTree(4), 7);
    assert.equal(utopianTree(5), 14);
    assert.equal(utopianTree(6), 15);
    assert.equal(utopianTree(7), 30);
    assert.equal(utopianTree(8), 31);
    assert.equal(utopianTree(9), 62);
    assert.equal(utopianTree(10), 63);
    assert.equal(utopianTree(59), 2147483646);
    assert.equal(utopianTree(60), 2147483647);
});
