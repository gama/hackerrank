const assert               = require('assert');
const { SinglyLinkedList } = require('..');
const reversePrint         = require('.');

it('should return the elements of a linked list', () => {
    assert.equal(reversePrint(SinglyLinkedList.from([])), '');
    assert.equal(reversePrint(SinglyLinkedList.from([1])), '1\n');
    assert.equal(reversePrint(SinglyLinkedList.from([1, 2])), '2\n1\n');
    assert.equal(reversePrint(SinglyLinkedList.from([1, 2, 3])), '3\n2\n1\n');
    assert.equal(reversePrint(SinglyLinkedList.from([1, -2, 10, 200])), '200\n10\n-2\n1\n');
});
