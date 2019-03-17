const assert          = require('assert');
const gradingStudents = require('.');

it('should returned the "rounded" grades', () => {
    assert.deepEqual(gradingStudents([0]),   [0]);
    assert.deepEqual(gradingStudents([1]),   [1]);
    assert.deepEqual(gradingStudents([37]),  [37]);
    assert.deepEqual(gradingStudents([38]),  [40]);
    assert.deepEqual(gradingStudents([40]),  [40]);
    assert.deepEqual(gradingStudents([41]),  [41]);
    assert.deepEqual(gradingStudents([42]),  [42]);
    assert.deepEqual(gradingStudents([43]),  [45]);
    assert.deepEqual(gradingStudents([98]),  [100]);
    assert.deepEqual(gradingStudents([100]), [100]);
    assert.deepEqual(gradingStudents([101]), [101]);
    assert.deepEqual(gradingStudents([73, 67, 38, 33]), [75, 67, 40, 33]);
});
