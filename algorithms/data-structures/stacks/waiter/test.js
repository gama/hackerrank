const assert            = require('assert');
const { waiter }        = require('.');
const { computePrimes } = require('.');

it('should compute the first N primes', () => {
    assert.deepEqual(computePrimes(10), [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31]);
});


const testCases = [
    // plates           iterations    expected
    [ [3, 4, 7, 6, 5],  1,            [4, 6, 3, 7, 5] ],
    [ [3, 3, 4, 4, 9],  2,            [4, 4, 9, 3, 3] ]
];

testCases.forEach(([plates, iterations, expected]) => {
    it(`should return the number on the plate (${plates})`, () => {
        assert.deepEqual(waiter(plates, iterations), expected);
    });
});
