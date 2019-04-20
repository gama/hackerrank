const assert               = require('assert');
const { DoublyLinkedList } = require('..');
const reverse              = require('.');

it('should return the elements of a linked list in reverse', () => {
    const l = (arr)  => DoublyLinkedList.from(arr).head;
    const p = (head) => {
        let list = new DoublyLinkedList();
        list.head = head;
        return list.print(' ');
    };

    // assert.equal(p(reverse(l([]))), '');
    // assert.equal(p(reverse(l([1]))), '1');
    assert.equal(p(reverse(l([1, 2]))), '2 1');
    assert.equal(p(reverse(l([1, 2, 3]))), '3 2 1');
    assert.equal(p(reverse(l([1, -2, 10, 200]))), '200 10 -2 1');
});
