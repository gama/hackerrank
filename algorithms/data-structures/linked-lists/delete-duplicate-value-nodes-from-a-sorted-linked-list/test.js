const assert               = require('assert');
const { SinglyLinkedList } = require('..');
const removeDuplicates     = require('.');

it('should delete the nodes with duplicated values on the sorted list', () => {
    const r = (arr) => {
        const llist = SinglyLinkedList.from(arr);
        removeDuplicates(llist.head);
        return llist.print('');
    };

    assert.equal(r([]),                          '');
    assert.equal(r([0]),                         '0');
    assert.equal(r([0, 0]),                      '0');
    assert.equal(r([1, 1]),                      '1');
    assert.equal(r([0, 1]),                      '01');
    assert.equal(r([0, 0, 1]),                   '01');
    assert.equal(r([0, 1, 1]),                   '01');
    assert.equal(r([0, 0, 1, 1]),                '01');
    assert.equal(r([0, 0, 1, 1, 1, 2, 2]),       '012');
    assert.equal(r([0, 0, 0, 1, 1, 1, 2, 2, 2]), '012');
});
