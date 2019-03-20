const assert       = require('assert');
const sockMerchant = require('.');

it('should return the total number of sock pairs in the pile', () => {
    assert.equal(sockMerchant([1]), 0);
    assert.equal(sockMerchant([1, 1]), 1);
    assert.equal(sockMerchant([100, 100]), 1);
    assert.equal(sockMerchant([1, 2, 3]), 0);
    assert.equal(sockMerchant([1, 2, 3, 2]), 1);
    assert.equal(sockMerchant([1, 2, 1, 2, 1, 3, 2]), 2);
    assert.equal(sockMerchant([10, 20, 20, 10, 10, 30, 50, 10, 20]), 3);
});
