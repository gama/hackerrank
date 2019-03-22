const assert          = require('assert');
const saveThePrisoner = require('.');

it('should return the index of the prisoner who\'ll receive the bad candy', () => {
    assert.equal(saveThePrisoner(1,  1, 1), 1);
    assert.equal(saveThePrisoner(2,  1, 1), 1);
    assert.equal(saveThePrisoner(2,  1, 2), 2);
    assert.equal(saveThePrisoner(2,  2, 1), 2);
    assert.equal(saveThePrisoner(2,  2, 2), 1);
    assert.equal(saveThePrisoner(2,  5, 1), 1);
    assert.equal(saveThePrisoner(2,  5, 2), 2);
    assert.equal(saveThePrisoner(2,  6, 1), 2);
    assert.equal(saveThePrisoner(2,  6, 2), 1);
    assert.equal(saveThePrisoner(5,  2, 1), 2);
    assert.equal(saveThePrisoner(5,  2, 2), 3);
    assert.equal(saveThePrisoner(3,  7, 3), 3);
    assert.equal(saveThePrisoner(7, 19, 2), 6);
    assert.equal(saveThePrisoner(7, 20, 2), 7);
    assert.equal(saveThePrisoner(7, 21, 2), 1);
    assert.equal(saveThePrisoner(7, 19, 3), 7);
    assert.equal(saveThePrisoner(7, 19, 4), 1);
});
