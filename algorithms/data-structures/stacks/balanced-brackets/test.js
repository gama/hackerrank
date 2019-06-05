const assert     = require('assert');
const isBalanced = require('.');

const testCases = [
    [ '[',            false ],
    [ ']',            false ],
    [ '{',            false ],
    [ '}',            false ],
    [ '(',            false ],
    [ ')',            false ],
    [ '{{',           false ],
    [ '}}',           false ],
    [ '{[}',          false ],
    [ '{[}]',         false ],
    [ ']()',          false ],
    [ '()',           true  ],
    [ '[]',           true  ],
    [ '{}',           true  ],
    [ '{{}}',         true  ],
    [ '{{[]}}',       true  ],
    [ '{{[}]}',       false ],
    [ '{[()]}',       true  ],

    [ '{{[[(())]]}}', true  ]
];

testCases.forEach(([input, expected]) => {
    it(`should return whether the string "${input}" contains a balanced set of brackets`, () => {
        assert.equal(isBalanced(input), expected);
    });
});
