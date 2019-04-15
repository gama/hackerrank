const assert               = require('assert');
const { SinglyLinkedList } = require('..');
const mergeLists           = require('.');

it('should return the merged list', () => {
    const l = (arr) => SinglyLinkedList.from(arr).head;
    assert.equal(mergeLists(l([]),        l([])).print(''),        '');
    assert.equal(mergeLists(l([0]),       l([])).print(''),        '0');
    assert.equal(mergeLists(l([]),        l([0])).print(''),       '0');
    assert.equal(mergeLists(l([0]),       l([1])).print(''),       '01');
    assert.equal(mergeLists(l([1]),       l([0])).print(''),       '01');
    assert.equal(mergeLists(l([0, 2]),    l([1])).print(''),       '012');
    assert.equal(mergeLists(l([0, 2]),    l([1])).print(''),       '012');
    assert.equal(mergeLists(l([0, 2]),    l([1, 3])).print(''),    '0123');
    assert.equal(mergeLists(l([0, 3]),    l([1, 2])).print(''),    '0123');
    assert.equal(mergeLists(l([1, 3]),    l([0, 2])).print(''),    '0123');
    assert.equal(mergeLists(l([1, 2]),    l([0, 3])).print(''),    '0123');
    assert.equal(mergeLists(l([2, 3, 3]), l([0, 1, 1, 2])).print(''), '0112233');
});
