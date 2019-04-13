// https://www.hackerrank.com/challenges/insert-a-node-at-a-specific-position-in-a-linked-list

'use strict';

module.exports = insertNodeAtPosition;

const { SinglyLinkedList, SinglyLinkedListNode } = require('..');

function insertNodeAtPosition(head, data, pos) {
    const node = new SinglyLinkedListNode();
    node.data  = data;
    if (pos === 0) {
        node.next = head;
        return node;
    }

    let curr = head;
    for (let i = 0; i < (pos - 1); ++i, curr = curr.next);
    node.next = curr.next;
    curr.next = node;
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
    const llist = new SinglyLinkedList();
    Array(Number(readLine())).fill().forEach(() => {
        llist.insertNode(Number(readLine()));
    });
    const data     = Number(readLine());
    const position = Number(readLine());

    llist.head = insertNodeAtPosition(llist.head, data, position);

    const ws = process.env.OUTPUT_PATH ? fs.createWriteStream(process.env.OUTPUT_PATH) : process.stdout;
    ws.write(llist.print(' ') + '\n');
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
