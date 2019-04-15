// https://www.hackerrank.com/challenges/get-the-value-of-the-node-at-a-specific-position-from-the-tail

'use strict';

module.exports = getNode;

const { SinglyLinkedList } = require('..');

function getNode(head, posFromTail) {
    let node, i, size;
    for (node = head, size = 0; node; node = node.next, size++);

    const posFromHead = size - posFromTail - 1;
    for (i = 0, node = head; i < posFromHead; node = node.next, i++);

    return node && node.data;
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
        const position = Number(readLine());

        const result   = getNode(llist.head, position);
        ws.write(result + '\n');
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
