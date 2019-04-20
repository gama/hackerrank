const assert               = require('assert');
const { SinglyLinkedList } = require('..');
const findMergeNode        = require('.');

it('should return the merged list', () => {
    const l = (arr1, arr2, pos) => {
        const l1 = SinglyLinkedList.from(arr1);
        const l2 = SinglyLinkedList.from(arr2);

        for (var n1 = l1.head, i = 0; i < pos && n1; n1 = n1.next, i++);
        for (var n2 = l2.head; n2.next; n2 = n2.next);
        n2.next = n1;

        return [l1.head, l2.head];
    };

    assert.equal(findMergeNode(...l([1, 2, 3], [4, 5, 6], 0)), 1);
    assert.equal(findMergeNode(...l([1, 2, 3], [4, 5, 6], 1)), 2);
    assert.equal(findMergeNode(...l([1, 2, 3], [4, 5, 6], 2)), 3);
});
