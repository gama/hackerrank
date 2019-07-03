const assert         = require('assert');
const processQueries = require('.');

const testCases = [
    // queries         expected
    [ [[1, 12], [3] ],                        [12] ],
    [ [[1, 12], [1, 23], [2], [3] ],          [23] ],
    [ [[1, 12], [1, 23], [2], [1, 34], [3] ], [23] ],
    [ [[1, 12], [1, 23], [2], [1, 34], [3] ], [23] ],
    [ [[1, 42], [2], [1, 14], [3], [1, 28], [3], [1, 60], [1, 78], [2], [2]], [14, 14] ]
];

testCases.forEach(([queries, expected]) => {
    it(`should return the printed numbers after the queries: ${queries})"`, () => {
        assert.deepEqual(processQueries(queries), expected);
    });
});
