const assert  = require('assert');
const acmTeam = require('.');

it('should return the number of maximum topics & teams', () => {
    assert.deepEqual(acmTeam(['00', '00']), [0, 1]);
    assert.deepEqual(acmTeam(['10', '10']), [1, 1]);
    assert.deepEqual(acmTeam(['01', '01']), [1, 1]);
    assert.deepEqual(acmTeam(['11', '11']), [2, 1]);
    assert.deepEqual(acmTeam(['00', '00', '00']), [0, 3]);
    assert.deepEqual(acmTeam(['00', '00', '01']), [1, 2]);
    assert.deepEqual(acmTeam(['00', '01', '01']), [1, 3]);
    assert.deepEqual(acmTeam(['10', '01', '01']), [2, 2]);
    assert.deepEqual(acmTeam(['11', '00', '00']), [2, 2]);
    assert.deepEqual(acmTeam(['00', '00', '00', '00']), [0, 6]);
    assert.deepEqual(acmTeam(['10', '00', '00', '01']), [2, 1]);
    assert.deepEqual(acmTeam(['10101', '11100', '11010', '00101']), [5, 2]);
    assert.deepEqual(acmTeam(['10101', '11110', '00010']), [5, 1]);
    assert.deepEqual(acmTeam([
        '0101010101010101010101010101010101',
        '0000000000000000000000000000000000',
        '0000000000000000000000000000000000'
    ]), [17, 2]);
    assert.deepEqual(acmTeam([
        '0101010101010101010101010101010101',
        '1010101010101010101010101010101010',
        '0000000000000000000000000000010101',
        '0000000000000000000000001010100000'
    ]), [34, 1]);
});
