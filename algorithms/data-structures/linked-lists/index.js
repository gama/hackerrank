const SinglyLinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

const SinglyLinkedList = class {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    insertNode(nodeData) {
        const node = new SinglyLinkedListNode(nodeData);

        if (this.head == null) {
            this.head = node;
        } else {
            this.tail.next = node;
        }

        this.tail = node;
    }

    static from(array) {
        return array.reduce((llist, el) => (
            (llist.insertNode(el), llist)
        ), new SinglyLinkedList());
    }
};

module.exports = { SinglyLinkedListNode, SinglyLinkedList };
