const assert               = require('assert');
const { DoublyLinkedList } = require('..');
const sortedInsert         = require('.');

it('should return the merged list', () => {
    const l = (arr)  => DoublyLinkedList.from(arr).head;
    const p = (head) => {
        let list = new DoublyLinkedList();
        list.head = head;
        return list.print(' ');
    };

    assert.equal(p(sortedInsert(l([]),     1)), '1');
    assert.equal(p(sortedInsert(l([1]),    2)), '1 2');
    assert.equal(p(sortedInsert(l([2]),    1)), '1 2');
    assert.equal(p(sortedInsert(l([1, 2]), 3)), '1 2 3');
    assert.equal(p(sortedInsert(l([2, 3]), 1)), '1 2 3');
    assert.equal(p(sortedInsert(l([1, 3]), 2)), '1 2 3');
    assert.equal(p(sortedInsert(l([1, 2]), 1)), '1 1 2');
    assert.equal(p(sortedInsert(l([1, 2]), 2)), '1 2 2');
    assert.equal(p(sortedInsert(l([1, 3, 4, 10]), 5)), '1 3 4 5 10');
});
