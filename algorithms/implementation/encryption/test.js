const assert     = require('assert');
const encryption = require('.');

it('should return the encrypted string', () => {
    assert.equal(encryption('a'), 'a');
    assert.equal(encryption('ab'), 'a b');
    assert.equal(encryption('abc'), 'ac b');
    assert.equal(encryption('abcd'), 'ac bd');
    assert.equal(encryption('abcde'), 'ad be c');
    assert.equal(encryption('abcdef'), 'ad be cf');
    assert.equal(encryption('abcdefg'), 'adg be cf');
    assert.equal(encryption('have a nice day'), 'hae and via ecy');
    assert.equal(encryption('feed the dog'), 'fto ehg ee dd');
    assert.equal(encryption('chillout'), 'clu hlt io');
    assert.equal(
        encryption('if man was meant to stay on the ground god would have given us roots'),
        'imtgdvs fearwer mayoogo anouuio ntnnlvt wttddes aohghn sseoau'
    );
});
