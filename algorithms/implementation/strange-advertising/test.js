const assert           = require('assert');
const viralAdvertising = require('.');

it('should return the cumulative number of people who liked the ad', () => {
    assert.equal(viralAdvertising(1), 2);
    assert.equal(viralAdvertising(2), 5);
    assert.equal(viralAdvertising(3), 9);
    assert.equal(viralAdvertising(4), 15);
    assert.equal(viralAdvertising(5), 24);
    assert.equal(viralAdvertising(6), 37);
    assert.equal(viralAdvertising(7), 56);
    assert.equal(viralAdvertising(8), 84);
});
