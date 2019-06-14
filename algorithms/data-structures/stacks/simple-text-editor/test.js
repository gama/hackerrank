const assert       = require('assert');
const simpleEditor = require('.');

const input1 =
    '8\n'     +
    '1 abc\n' +
    '3 3\n'   +
    '2 3\n'   +
    '1 xy\n'  +
    '3 2\n'   +
    '4\n'    +
    '4\n'    +
    '3 1\n';
const expected1 = 'c\ny\na\n';

const testCases = [
    [ input1, expected1 ],
];

testCases.forEach(([input, expected]) => {
    it(`should return the printed characters (input: ${input})"`, () => {
        assert.equal(simpleEditor(input), expected);
    });
});
