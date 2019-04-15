const assert               = require('assert');
const { SinglyLinkedList } = require('..');
const CompareLists         = require('.');

it('should return whether the two lists are equal', () => {
    const l = (arr) => SinglyLinkedList.from(arr).head;
    assert.equal(CompareLists(l([]),        l([])),        true);
    assert.equal(CompareLists(l([0]),       l([0])),       true);
    assert.equal(CompareLists(l([0]),       l([1])),       false);
    assert.equal(CompareLists(l([0, 1]),    l([0])),       false);
    assert.equal(CompareLists(l([0]),       l([0, 1])),    false);
    assert.equal(CompareLists(l([1, 2]),    l([1, 1])),    false);
    assert.equal(CompareLists(l([0, 1]),    l([0, 1])),    true);
    assert.equal(CompareLists(l([0, 1]),    l([1, 0])),    false);
    assert.equal(CompareLists(l([1, 0]),    l([0, 1])),    false);
    assert.equal(CompareLists(l([0, 1]),    l([0, 1, 2])), false);
    assert.equal(CompareLists(l([0, 1, 2]), l([0, 1, 2])), true);
    assert.equal(CompareLists(l([0, 1, 2]), l([0, 0, 2])), false);
    assert.equal(CompareLists(l([0, 1, 2]), l([1, 1, 2])), false);
    assert.equal(CompareLists(l([0, 1, 2]), l([0, 1, 1])), false);
});
