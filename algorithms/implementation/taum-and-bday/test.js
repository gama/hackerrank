const assert   = require('assert');
const taumBday = require('.');

it('should return the minimal cost of the gifts', () => {
    assert.equal(taumBday(10, 10, 1, 1, 1), 20);
    assert.equal(taumBday(5, 9, 2, 3, 4), 37);
    assert.equal(taumBday(3, 6, 9, 1, 1), 12);
    assert.equal(taumBday(7, 7, 4, 2, 1), 35);
    assert.equal(taumBday(7, 7, 4, 2, 1), 35);
    assert.equal(taumBday(3, 3, 1, 9, 2), 12);
    assert.equal(taumBday(547257058, 324443644, 594266462, 325933528, 461643627),  430963577188284828n);
    assert.equal(taumBday(736418699, 754161925, 912285746, 841360803, 736841333), 1306346564995590229n);
});
