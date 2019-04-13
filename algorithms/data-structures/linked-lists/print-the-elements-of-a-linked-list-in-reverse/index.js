// https://www.hackerrank.com/challenges/print-the-elements-of-a-linked-list-in-reverse

'use strict';

module.exports = reversePrint;

const { SinglyLinkedList } = require('..');

function reversePrint(head) {
    let str = '';
    for (let node = head.head || head; node && node.data; node = node.next)
        str = node.data + '\n' + str;
    return str;
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
        const size = Number(readLine());
        const llist = Array(size).fill().reduce((llist) => (
            (llist.insertNode(Number(readLine())), llist)
        ), new SinglyLinkedList());

        const result = reversePrint(llist.head);
        ws.write(result);
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
