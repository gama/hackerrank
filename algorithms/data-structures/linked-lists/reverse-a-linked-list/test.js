const assert               = require('assert');
const { SinglyLinkedList } = require('..');
const reverse              = require('.');

it('should return the elements of a linked list', () => {
    assert.equal(reverse(SinglyLinkedList.from([]).head).print(), '');
    assert.equal(reverse(SinglyLinkedList.from([1]).head).print(), '1');
    assert.equal(reverse(SinglyLinkedList.from([1, 2]).head).print(), '2\n1');
    assert.equal(reverse(SinglyLinkedList.from([1, 2, 3]).head).print(), '3\n2\n1');
    assert.equal(reverse(SinglyLinkedList.from([1, -2, 10, 200]).head).print(), '200\n10\n-2\n1');
});
