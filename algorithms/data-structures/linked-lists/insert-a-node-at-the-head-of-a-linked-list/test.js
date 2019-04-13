const assert               = require('assert');
const { SinglyLinkedList } = require('..');
const insertNodeAtHead     = require('.');

it('should insert the elements at the start of the list', () => {
    let llist = new SinglyLinkedList();
    assert.equal(llist.print(), '');

    llist.head = insertNodeAtHead(llist.head, 0);
    assert.equal(llist.print(), '0');

    llist.head = insertNodeAtHead(llist.head, 1);
    assert.equal(llist.print(), '1\n0');

    llist.head = insertNodeAtHead(llist.head, 2);
    assert.equal(llist.print(), '2\n1\n0');

    const arr    = Array(1000).fill().map((_, i) => i);
    const llist2 = new SinglyLinkedList();
    arr.forEach(e => { llist2.head = insertNodeAtHead(llist2.head, e); });
    assert.equal(llist2.print(), arr.reverse().join('\n'));
});
