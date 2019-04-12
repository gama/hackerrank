const assert               = require('assert');
const { SinglyLinkedList } = require('..');
const printLinkedList      = require('.');

it('should return the elements of a linked list', () => {
    assert.equal(printLinkedList(SinglyLinkedList.from([])), '');
    assert.equal(printLinkedList(SinglyLinkedList.from([1])), '1\n');
    assert.equal(printLinkedList(SinglyLinkedList.from([1, -2, 10, 200])), '1\n-2\n10\n200\n');
});
