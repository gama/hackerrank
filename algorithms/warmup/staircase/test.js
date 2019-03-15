/* eslint-disable indent */

const assert    = require('assert');
const staircase = require('.');

it('should return a staircase string', () => {
    assert.equal(staircase(0), '');
    assert.equal(staircase(1), '#\n');
    assert.equal(staircase(2), ' #\n##\n');
    assert.equal(staircase(6), '     #\n' +
                               '    ##\n' +
                               '   ###\n' +
                               '  ####\n' +
                               ' #####\n' +
                               '######\n');
});
