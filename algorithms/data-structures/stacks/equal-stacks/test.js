const assert      = require('assert');
const equalStacks = require('.');

const testCases = [
    // stack1           stack2     stack3          expected
    [ [[3],             [3],       [5]         ],  0],
    [ [[3, 1],          [1, 1, 2], [4]         ],  4],
    [ [[3, 2, 1, 1, 1], [4, 3, 2], [1, 1, 4, 1]],  5]
];

testCases.forEach(([input, expected]) => {
    it(`should return the maximum equal height of the stacks "${input.join('|')}"`, () => {
        assert.equal(equalStacks(input), expected);
    });
});
