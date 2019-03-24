const assert      = require('assert');
const libraryFine = require('.');

it('should return the value of library fine', () => {
    assert.equal(libraryFine( 6, 6, 2015, 6, 6, 2015), 0);
    assert.equal(libraryFine( 5, 6, 2015, 6, 6, 2015), 0);
    assert.equal(libraryFine(30, 5, 2015, 6, 6, 2015), 0);
    assert.equal(libraryFine( 1, 1, 2014, 6, 6, 2015), 0);
    assert.equal(libraryFine( 7, 6, 2015, 6, 6, 2015), 15);
    assert.equal(libraryFine( 8, 6, 2015, 6, 6, 2015), 30);
    assert.equal(libraryFine( 9, 6, 2015, 6, 6, 2015), 45);
    assert.equal(libraryFine( 1, 7, 2015, 6, 6, 2015), 500);
    assert.equal(libraryFine(31, 7, 2015, 6, 6, 2015), 500);
    assert.equal(libraryFine( 1, 8, 2015, 6, 6, 2015), 1000);
    assert.equal(libraryFine(30, 8, 2015, 6, 6, 2015), 1000);
    assert.equal(libraryFine( 1, 9, 2015, 6, 6, 2015), 1500);
    assert.equal(libraryFine( 1, 1, 2016, 6, 6, 2015), 10000);
    assert.equal(libraryFine(31,12, 2016, 6, 6, 2015), 10000);
    assert.equal(libraryFine( 1, 1, 2017, 6, 6, 2015), 10000);
});
