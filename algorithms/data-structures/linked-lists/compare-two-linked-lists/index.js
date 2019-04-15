// https://www.hackerrank.com/challenges/compare-two-linked-lists

'use strict';

module.exports = CompareLists;

const { SinglyLinkedList } = require('..');

function CompareLists(head1, head2) {
    let node1, node2;
    for (node1 = head1, node2 = head2; node1 && node2; node1 = node1.next, node2 = node2.next)
        if (node1.data !== node2.data)
            return false;
    return !node1 && !node2;
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
        const size1  = Number(readLine());
        const llist1 = Array(size1).fill().reduce((llist) => (
            (llist.insertNode(Number(readLine())), llist)
        ), new SinglyLinkedList());

        const size2  = Number(readLine());
        const llist2 = Array(size2).fill().reduce((llist) => (
            (llist.insertNode(Number(readLine())), llist)
        ), new SinglyLinkedList());

        const result = CompareLists(llist1.head, llist2.head);
        ws.write(Number(result) + '\n');
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
