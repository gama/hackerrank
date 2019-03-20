const assert      = require('assert');
const catAndMouse = require('.');

it('should return which cat caught the mouse', () => {
    assert.equal(catAndMouse(2, 5, 3), 'Cat A');
    assert.equal(catAndMouse(1, 4, 3), 'Cat B');
    assert.equal(catAndMouse(1, 5, 3), 'Mouse C');
    assert.equal(catAndMouse(2, 3, 1), 'Cat A');
    assert.equal(catAndMouse(1, 2, 3), 'Cat B');
    assert.equal(catAndMouse(1, 3, 2), 'Mouse C');
});
