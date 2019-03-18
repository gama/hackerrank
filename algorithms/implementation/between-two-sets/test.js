const assert            = require('assert');
const { inBetweenSets } = require('.');

it('should return the time converted to 24h format', () => {
    assert.deepEqual(inBetweenSets([],     []),           []);
    assert.deepEqual(inBetweenSets([1],    []),           []);
    assert.deepEqual(inBetweenSets([],     [1]),          []);
    assert.deepEqual(inBetweenSets([1],    [1]),          [1]);
    assert.deepEqual(inBetweenSets([2],    [2]),          [2]);
    assert.deepEqual(inBetweenSets([2, 4], [2]),          []);
    assert.deepEqual(inBetweenSets([2, 4], [4]),          [4]);
    assert.deepEqual(inBetweenSets([2, 4], [4, 8]),       [4]);
    assert.deepEqual(inBetweenSets([2, 4], [8, 12]),      [4]);
    assert.deepEqual(inBetweenSets([2, 4], [8, 16]),      [4, 8]);
    assert.deepEqual(inBetweenSets([4, 2], [16, 8]),      [4, 8]);
    assert.deepEqual(inBetweenSets([3, 4], [8, 16]),      []);
    assert.deepEqual(inBetweenSets([2, 4], [8, 16, 18]),  []);
    assert.deepEqual(inBetweenSets([2, 6], [24, 36]),     [6, 12]);
    assert.deepEqual(inBetweenSets([2, 4], [16, 32, 96]), [4, 8, 16]);
});
