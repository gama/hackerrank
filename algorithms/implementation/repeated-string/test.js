const assert         = require('assert');
const infiniteString = require('.');

it('should return the number of a\'s in the n-first chars of the infinite string', () => {
    assert.equal(infiniteString('abcac', 10), 4);
    assert.equal(infiniteString('abc', 10), 4);
    assert.equal(infiniteString('abc', 11), 4);
    assert.equal(infiniteString('abc', 12), 4);
    assert.equal(infiniteString('abc', 13), 5);
    assert.equal(infiniteString('a', 10), 10);
    assert.equal(infiniteString('a', 10**7), 10**7);
    assert.equal(infiniteString('ab', 10**7), 10**7 / 2);
    assert.equal(infiniteString('abc', 10**7), Math.floor(10**7 / 3) + 1);
    assert.equal(infiniteString('bac', 10**7), Math.floor(10**7 / 3) + 0);
});
