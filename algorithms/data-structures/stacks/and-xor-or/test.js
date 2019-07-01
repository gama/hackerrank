const assert   = require('assert');
const andXorOr = require('.');

const testCases = [
    // input array      expected
    [ [9, 6, 3, 5, 2],  15     ],
    [ [9, 3, 6, 5, 2],  10     ],
    [ [6, 3, 9, 5, 2],  12     ],
    [ [6, 3, 2, 5, 9],  12     ],
    [ [5, 3, 2, 6, 9],  15     ],
    [ [1, 7, 9, 9, 8],  15     ]
];

testCases.forEach(([input, expected]) => {
    it(`should return the maximum value of the and-xor-or formula (${input})"`, () => {
        assert.equal(andXorOr(input), expected);
    });
});
