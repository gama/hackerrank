const assert              = require('assert');
const extraLongFactorials = require('.');

it('should return the extra long factorial value', () => {
    assert.equal(extraLongFactorials(25).toString(), '15511210043330985984000000');
    assert.equal(extraLongFactorials(30).toString(), '265252859812191058636308480000000');
});
