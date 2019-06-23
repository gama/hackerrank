const fs              = require('fs');
const assert          = require('assert');
const poisonousPlants = require('.');

const input00   = fs.readFileSync('input00.txt').toString().split('\n')[1].split(' ').map(Number);
const input21   = fs.readFileSync('input21.txt').toString().split('\n')[1].split(' ').map(Number);
const input24   = fs.readFileSync('input24.txt').toString().split('\n')[1].split(' ').map(Number);
const testCases = [
    // plants                                                      expected
    [ [1, 1, 1, 1, 1],                                             0      ],
    [ [1, 2, 3, 4, 5],                                             1      ],
    [ [5, 4, 3, 2, 1],                                             0      ],
    [ [3, 6, 2, 7, 5],                                             2      ],
    [ [6, 5, 8, 4, 7, 10, 9],                                      2      ],
    [ [5, 4, 9, 8, 7, 6, 8, 7, 6, 5, 7, 6, 5, 4, 3],               7      ],
    [ [3, 1, 10, 7, 3, 5, 6, 6],                                   3      ],
    [ [11, 7, 19, 6, 12, 12, 8, 8, 7, 1, 10, 15, 5, 12],           5      ],
    [ [2, 12, 11, 10, 9, 8, 4, 15, 14, 13, 20, 19, 21, 6, 5],      6      ],

    [ input00,                                                     10     ],
    [ [1, ...Array(100000).fill().map((_, i) => i + 2).reverse()], 100000 ],
    [ input21,                                                     15     ],
    [ input24,                                                     49999  ],
];

testCases.forEach(([plants, expected]) => {
    it(`should return the number days after which no plant dies (${plants.slice(0, 3)})"`, () => {
        assert.equal(poisonousPlants(plants), expected);
    });
});
