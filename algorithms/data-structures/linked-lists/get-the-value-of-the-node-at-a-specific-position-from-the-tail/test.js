const assert               = require('assert');
const { SinglyLinkedList } = require('..');
const getNode              = require('.');

it('should get the node at the given position from the tail', () => {
    const l = (arr) => SinglyLinkedList.from(arr).head;
    assert.equal(getNode(l([]),        0), null);
    assert.equal(getNode(l([0]),       0), 0);
    assert.equal(getNode(l([1]),       0), 1);
    assert.equal(getNode(l([0, 1]),    0), 1);
    assert.equal(getNode(l([0, 1]),    1), 0);
    assert.equal(getNode(l([0, 1, 2]), 0), 2);
    assert.equal(getNode(l([0, 1, 2]), 1), 1);
    assert.equal(getNode(l([0, 1, 2]), 2), 0);
});
