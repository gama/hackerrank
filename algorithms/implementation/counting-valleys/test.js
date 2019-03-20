const assert          = require('assert');
const countingValleys = require('.');

it('should return the number of valleys traversed', () => {
    assert.equal(countingValleys(''), 0);
    assert.equal(countingValleys('U'), 0);
    assert.equal(countingValleys('D'), 0);
    assert.equal(countingValleys('DD'), 0);
    assert.equal(countingValleys('UD'), 0);
    assert.equal(countingValleys('DU'), 1);
    assert.equal(countingValleys('DDUU'), 1);
    assert.equal(countingValleys('DDUDUU'), 1);
    assert.equal(countingValleys('DUDUDU'), 3);
    assert.equal(countingValleys('UDUDUD'), 0);
    assert.equal(countingValleys('UDUDUD'), 0);
    assert.equal(countingValleys('UUDDDDUUDDDUUDUUUD'), 2);
    assert.equal(countingValleys('DDUUUUDD'), 1);
    assert.equal(countingValleys('UDDDUDUU'), 1);
});
