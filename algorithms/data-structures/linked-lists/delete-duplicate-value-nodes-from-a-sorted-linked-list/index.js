// https://www.hackerrank.com/challenges/get-the-value-of-the-node-at-a-specific-position-from-the-tail

'use strict';

module.exports = removeDuplicates;

const { SinglyLinkedList } = require('..');

function removeDuplicates(head) {
    for (let node = head, prev = null; node; node = node.next)
        if (prev && prev.data === node.data)
            prev.next = node.next;
        else
            prev = node;
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
        const llist = new SinglyLinkedList();
        Array(Number(readLine())).fill().forEach(() => {
            llist.insertNode(Number(readLine()));
        });

        removeDuplicates(llist.head);
        ws.write(llist.print(' ') + '\n');
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
