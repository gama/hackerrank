const assert          = require('assert');
const dayOfProgrammer = require('.');

it('should return the day of the programmer', () => {
    assert.equal(dayOfProgrammer(1700), '12.09.1700');
    assert.equal(dayOfProgrammer(1701), '13.09.1701');
    assert.equal(dayOfProgrammer(1704), '12.09.1704');
    assert.equal(dayOfProgrammer(1800), '12.09.1800');
    assert.equal(dayOfProgrammer(1900), '12.09.1900');
    assert.equal(dayOfProgrammer(1901), '13.09.1901');
    assert.equal(dayOfProgrammer(1916), '12.09.1916');
    assert.equal(dayOfProgrammer(1917), '13.09.1917');
    assert.equal(dayOfProgrammer(1918), '26.09.1918');
    assert.equal(dayOfProgrammer(1919), '13.09.1919');
    assert.equal(dayOfProgrammer(1920), '12.09.1920');
    assert.equal(dayOfProgrammer(1984), '12.09.1984');
    assert.equal(dayOfProgrammer(2000), '12.09.2000');
    assert.equal(dayOfProgrammer(2016), '12.09.2016');
    assert.equal(dayOfProgrammer(2017), '13.09.2017');
    assert.equal(dayOfProgrammer(2100), '13.09.2100');
    assert.equal(dayOfProgrammer(2104), '12.09.2104');
    assert.equal(dayOfProgrammer(2200), '13.09.2200');
    assert.equal(dayOfProgrammer(2300), '13.09.2300');
    assert.equal(dayOfProgrammer(2400), '12.09.2400');
});
