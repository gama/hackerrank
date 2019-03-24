const assert          = require('assert');
const appendAndDelete = require('.');

it('should return whether the start string may be transformed into the target string', () => {
    assert.equal(appendAndDelete('abc', 'def', 6), 'Yes');
    assert.equal(appendAndDelete('abc', 'def', 7), 'Yes');
    assert.equal(appendAndDelete('abc', 'def', 5), 'No');
    assert.equal(appendAndDelete('aba', 'aba', 7), 'Yes');
    assert.equal(appendAndDelete('ashley', 'ash', 2), 'No');
    assert.equal(appendAndDelete('ashley', 'ash', 3), 'Yes');
    assert.equal(appendAndDelete('ashley', 'ash', 4), 'No');
    assert.equal(appendAndDelete('ashley', 'ash', 5), 'Yes');
    assert.equal(appendAndDelete('hackerhappy', 'hackerhank', 9),  'Yes');
    assert.equal(appendAndDelete('hackerhappy', 'hackerhank', 8),  'No');
    assert.equal(appendAndDelete('hackerhappy', 'hackerhank', 10), 'No');
    assert.equal(appendAndDelete('hackerhappy', 'hackerhank', 11), 'Yes');
    assert.equal(appendAndDelete('hackerhappy', 'hackerhank', 12), 'No');
    assert.equal(appendAndDelete('hackerhappy', 'hackerhank', 13), 'Yes');
    assert.equal(appendAndDelete('hackerhappy', 'hackerhank', 20), 'No');
    assert.equal(appendAndDelete('hackerhappy', 'hackerhank', 21), 'Yes');
    assert.equal(appendAndDelete('hackerhappy', 'hackerhank', 22), 'Yes');
});
