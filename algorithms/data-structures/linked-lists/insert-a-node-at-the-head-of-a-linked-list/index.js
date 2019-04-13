// https://www.hackerrank.com/challenges/insert-a-node-at-the-head-of-a-linked-list/problem

'use strict';

module.exports = insertNodeAtHead;

const { SinglyLinkedList, SinglyLinkedListNode } = require('..');

function insertNodeAtHead(head, data) {
    const node = new SinglyLinkedListNode();
    node.data = data;
    node.next = head;
    return node;
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
        const llistItem = parseInt(readLine(), 10);
        llist.head = insertNodeAtHead(llist.head, llistItem);
    });

    const ws = process.env.OUTPUT_PATH ? fs.createWriteStream(process.env.OUTPUT_PATH) : process.stdout;
    ws.write(llist.print() + '\n');
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
