const assert  = require('assert');
const squares = require('.');

it('should return the number of square integers', () => {
    assert.equal(squares(1, 25), 5);
    assert.equal(squares(2, 24), 3);
    assert.equal(squares(24, 49), 3);
    assert.equal(squares(16, 25), 2);
    assert.equal(squares(16, 24), 1);
    assert.equal(squares(17, 25), 1);
    assert.equal(squares(17, 24), 0);
});
