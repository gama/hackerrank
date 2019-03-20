const assert        = require('assert');
const getMoneySpent = require('.');

it('should return the money spent to buy a keyboard and usb drive', () => {
    assert.equal(getMoneySpent([4], [5], 8), -1);
    assert.equal(getMoneySpent([4], [5], 9), 9);
    assert.equal(getMoneySpent([4], [5], 10), 9);
    assert.equal(getMoneySpent([3, 4], [4, 5], 9), 9);
    assert.equal(getMoneySpent([3, 4], [4, 5], 6), -1);
    assert.equal(getMoneySpent([1, 2, 3, 4, 5], [5, 10, 20], 9), 9);
    assert.equal(getMoneySpent([1, 2, 3, 4, 5], [5, 10, 20], 14), 14);
    assert.equal(getMoneySpent([0, 50, 60], [5, 8, 12], 60), 58);
    assert.equal(getMoneySpent([40, 50, 60], [5, 8, 12], 60), 58);
    assert.equal(getMoneySpent([3, 1], [5, 2, 8], 10), 9);
});
