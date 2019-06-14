const assert           = require('assert');
const largestRectangle = require('.');

const testCases = [
    // heights              expected
    [ [1],                   1 ],
    [ [3],                   3 ],
    [ [1, 3],                3 ],
    [ [2, 3],                4 ],
    [ [3, 2],                4 ],
    [ [3, 1],                3 ],
    [ [1, 3, 5, 3, 1],       9 ],
    [ [1, 2, 3, 4, 5],       9 ],
    [ [1, 3, 5, 9, 11],     18 ],
    [ [11, 11, 10, 10, 10], 50 ],
    [ [8979, 4570, 6436, 5083, 7780, 3269, 5400, 7579, 2324, 2116], 26152 ]
];

testCases.forEach(([heights, expected]) => {
    it(`should return the area of the largest rectangle (${heights})"`, () => {
        assert.equal(largestRectangle(heights), expected);
    });
});
