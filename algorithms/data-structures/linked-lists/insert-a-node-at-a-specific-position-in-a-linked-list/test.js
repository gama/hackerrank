const assert               = require('assert');
const { SinglyLinkedList } = require('..');
const insertNodeAtPosition = require('.');

it('should insert the elements at the given position', () => {
    let llist;
    llist = SinglyLinkedList.from([]);
    llist.head = insertNodeAtPosition(llist.head, 0, 0);
    assert.equal(llist.print(' '), '0');

    llist = SinglyLinkedList.from([0]);
    llist.head = insertNodeAtPosition(llist.head, 1, 0);
    assert.equal(llist.print(' '), '1 0');

    llist = SinglyLinkedList.from([0]);
    llist.head = insertNodeAtPosition(llist.head, 1, 1);
    assert.equal(llist.print(' '), '0 1');

    llist = SinglyLinkedList.from([1, 2]);
    llist.head = insertNodeAtPosition(llist.head, 3, 0);
    assert.equal(llist.print(' '), '3 1 2');

    llist = SinglyLinkedList.from([1, 2]);
    llist.head = insertNodeAtPosition(llist.head, 3, 1);
    assert.equal(llist.print(' '), '1 3 2');

    llist = SinglyLinkedList.from([1, 2]);
    llist.head = insertNodeAtPosition(llist.head, 3, 2);
    assert.equal(llist.print(' '), '1 2 3');

    llist = SinglyLinkedList.from([16, 13, 7]);
    llist.head = insertNodeAtPosition(llist.head, 1, 2);
    assert.equal(llist.print(' '), '16 13 1 7');
});
