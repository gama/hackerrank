const assert        = require('assert');
const happyLadybugs = require('.');

it('should return whether it is possible to make all ladybugs happy', () => {
    assert.equal(happyLadybugs("RBY_YBR"), true);
    assert.equal(happyLadybugs("X_Y__X"), false);
    assert.equal(happyLadybugs("__"), true);
    assert.equal(happyLadybugs("B_RRBR"), true);
    assert.equal(happyLadybugs("B_RRBR"), true);
    assert.equal(happyLadybugs("AABBC"), false);
    assert.equal(happyLadybugs("AABBC_C"), true);
    assert.equal(happyLadybugs("_"), true);
    assert.equal(happyLadybugs("DD__FQ_QQF"), true);
    assert.equal(happyLadybugs("AABCBC"), false);
    assert.equal(happyLadybugs("AABBCC"), true);
});
