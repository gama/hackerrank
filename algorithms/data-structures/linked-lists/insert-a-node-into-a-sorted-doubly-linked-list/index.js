// https://www.hackerrank.com/challenges/insert-a-node-into-a-sorted-doubly-linked-list

'use strict';

module.exports = sortedInsert;

const { DoublyLinkedList, DoublyLinkedListNode } = require('..');

function sortedInsert(head, data) {
    const node = new DoublyLinkedListNode(data);
    if (!head)
        return node;

    if (data < head.data) {
        node.next = head;
        head.prev = node;
        return node;
    }

    for (var prev = head, next = head.next;
        next && next.data < data;
        prev = next, next = next.next);
    node.next = next;
    node.prev = prev;
    prev.next = node;
    if (next)
        next.prev = node;

    return head;
}

// --------------- HackerRank runtime -----------------

const fs = require('fs');

let inputString = '';
let currentLine = 0;

function readLine() {
    return inputString[currentLine++];
}

function main() {
    const ws = process.env.OUTPUT_PATH ? fs.createWriteStream(process.env.OUTPUT_PATH) : process.stdout;

    const numTests = Number(readLine());
    Array(numTests).fill().forEach(() => {
        const size  = Number(readLine());
        const llist = Array(size).fill().reduce((llist) => (
            (llist.insertNode(Number(readLine())), llist)
        ), new DoublyLinkedList());
        const data  = Number(readLine());

        const rllist = new DoublyLinkedList();
        rllist.head  = sortedInsert(llist.head, data);
        ws.write(rllist.print(' ') + '\n');
    });

    ws.end();
}

if (module === require.main) {
    process.stdin.resume();
    process.stdin.setEncoding('utf-8');

    process.stdin.on('data', inputStdin => {
        inputString += inputStdin;
    });

    process.stdin.on('end', () => {
        inputString = inputString.trim().split('\n').map(str => str.trim());
        main();
    });
}
