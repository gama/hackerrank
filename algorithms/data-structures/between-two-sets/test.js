const assert         = require('assert');
const timeConversion = require('.');

it('should return the time converted to 24h format', () => {
    assert.equal(timeConversion('12:00:00AM'), '00:00:00');
    assert.equal(timeConversion('12:00:00PM'), '12:00:00');
    assert.equal(timeConversion('11:59:59AM'), '11:59:59');
    assert.equal(timeConversion('11:59:59PM'), '23:59:59');
    assert.equal(timeConversion('07:05:45PM'), '19:05:45');
});
