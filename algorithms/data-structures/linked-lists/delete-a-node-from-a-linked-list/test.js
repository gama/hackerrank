const assert               = require('assert');
const { SinglyLinkedList } = require('..');
const deleteNode           = require('.');

it('should delete the element at the given position', () => {
    let llist;
    // llist = SinglyLinkedList.from([0]);
    // llist.head = deleteNode(llist.head, 0);
    // assert.equal(llist.print(' '), '');

    // llist = SinglyLinkedList.from([0, 1]);
    // llist.head = deleteNode(llist.head, 0);
    // assert.equal(llist.print(' '), '1');

    // llist = SinglyLinkedList.from([0, 1]);
    // llist.head = deleteNode(llist.head, 1);
    // assert.equal(llist.print(' '), '0');

    // llist = SinglyLinkedList.from([1, 2, 3]);
    // llist.head = deleteNode(llist.head, 0);
    // assert.equal(llist.print(' '), '2 3');

    // llist = SinglyLinkedList.from([1, 2, 3]);
    // llist.head = deleteNode(llist.head, 1);
    // assert.equal(llist.print(' '), '1 3');

    llist = SinglyLinkedList.from([1, 2, 3]);
    llist.head = deleteNode(llist.head, 2);
    assert.equal(llist.print(' '), '1 2');

    llist = SinglyLinkedList.from([20, 6, 2, 19, 7, 4, 15, 9]);
    llist.head = deleteNode(llist.head, 3);
    assert.equal(llist.print(' '), '20 6 2 7 4 15 9');
});
