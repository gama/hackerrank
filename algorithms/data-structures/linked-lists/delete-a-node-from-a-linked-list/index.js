// https://www.hackerrank.com/challenges/delete-a-node-from-a-linked-list/problem?h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen

'use strict';

module.exports = deleteNode;

const { SinglyLinkedList } = require('..');

function deleteNode(head, pos) {
    if (pos === 0)
        return head.next;

    let prev = head, curr = head.next;
    for (let i = 0; i < (pos - 1); i++, prev = curr, curr = curr.next);
    prev.next = curr.next;
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
    const position = Number(readLine());

    llist.head = deleteNode(llist.head, position);

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
