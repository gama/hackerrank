const assert         = require('assert');
const processQueries = require('.');

const parseGrid = (str) => str.split(' ').map(line => [...line]);
const testCases = [
    // grid                  coords         expected
    [ '... .X. ...',         [0, 0, 1, 2],  2 ],
    [ '.X. .X. ...',         [0, 0, 0, 2],  3 ],
    [ '.XXX .X.. .XX. ....', [0, 0, 1, 2],  4 ]
];

testCases.forEach(([grid, coords, expected]) => {
    it(`should return the minimum # of moves to reach the goal (${grid}; ${coords})"`, () => {
        assert.equal(processQueries(parseGrid(grid), ...coords), expected);
    });
});
