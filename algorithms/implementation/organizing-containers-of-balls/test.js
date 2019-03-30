const assert               = require('assert');
const organizingContainers = require('.');

it('should return if it is possible to ', () => {
    assert.equal(organizingContainers([[1, 1], [1, 1]]), 'Possible');
    assert.equal(organizingContainers([[0, 2], [1, 1]]), 'Impossible');
    assert.equal(organizingContainers([[1, 3, 1], [2, 1, 2], [3, 3, 3]]), 'Impossible');
    assert.equal(organizingContainers([[0, 2, 1], [1, 1, 1], [2, 0, 0]]), 'Possible');
    assert.equal(organizingContainers([
        [997612619, 934920795, 998879231, 999926463],
        [960369681, 997828120, 999792735, 979622676],
        [999013654, 998634077, 997988323, 958769423],
        [997409523, 999301350, 940952923, 993020546]
    ]), 'Possible');
});
