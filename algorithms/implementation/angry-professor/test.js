const assert         = require('assert');
const angryProfessor = require('.');

it('should return whether the class is cancelled', () => {
    assert.equal(angryProfessor(1, [-1]), 'NO');
    assert.equal(angryProfessor(1, [0]), 'NO');
    assert.equal(angryProfessor(1, [1]), 'YES');
    assert.equal(angryProfessor(2, [-1, -1]), 'NO');
    assert.equal(angryProfessor(2, [-1, 0]), 'NO');
    assert.equal(angryProfessor(2, [0, 0]), 'NO');
    assert.equal(angryProfessor(2, [1, 0]), 'YES');
    assert.equal(angryProfessor(4, [-1, -1, 0, 0, 1, 1]), 'NO');
    assert.equal(angryProfessor(5, [-1, -1, 0, 0, 1, 1]), 'YES');
    assert.equal(angryProfessor(3, [-1, -3, 4, 2]), 'YES');
    assert.equal(angryProfessor(2, [0, -1, 2, 1]), 'NO');
});
