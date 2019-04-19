const assert               = require('assert');
const { SinglyLinkedList } = require('..');
const hasCycle             = require('.');

it('should return wether the list has a cycle', () => {
    const buildList = (arr, extraPos) => {
        const llist = SinglyLinkedList.from(arr);
        let extra, last, node = llist.head;
        for (let i = 0; i < arr.length; i++, last = node, node = node.next) {
            if (i == extraPos)
                extra = node;
        }
        last.next = extra;

        return llist.head;
    };

    assert.equal(hasCycle(buildList([1], 0)),       true);
    assert.equal(hasCycle(buildList([1], 1)),       false);
    assert.equal(hasCycle(buildList([1, 2, 3], 0)), true);
    assert.equal(hasCycle(buildList([1, 2, 3], 1)), true);
    assert.equal(hasCycle(buildList([1, 2, 3], 2)), true);
    assert.equal(hasCycle(buildList([1, 2, 3], 3)), false);
    assert.equal(hasCycle(buildList([1, 2, 3], 4)), false);
});
