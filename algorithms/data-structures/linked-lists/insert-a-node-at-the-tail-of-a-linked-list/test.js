const assert               = require('assert');
const { SinglyLinkedList } = require('..');
const insertNodeAtTail     = require('.');

it('should insert the elements at the end of the list', () => {
    let llist = new SinglyLinkedList();
    assert.equal(llist.print(), '');

    llist.head = insertNodeAtTail(llist.head, 0);
    assert.equal(llist.print(), '0');

    llist.head = insertNodeAtTail(llist.head, 1);
    assert.equal(llist.print(), '0\n1');

    llist.head = insertNodeAtTail(llist.head, 2);
    assert.equal(llist.print(), '0\n1\n2');

    const arr    = Array(1000).fill().map((_, i) => i);
    const llist2 = new SinglyLinkedList();
    arr.forEach(e => { llist2.head = insertNodeAtTail(llist2.head, e); });
    assert.equal(llist2.print(), arr.join('\n'));
});
