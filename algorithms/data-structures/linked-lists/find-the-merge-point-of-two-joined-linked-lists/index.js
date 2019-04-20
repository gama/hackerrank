// https://www.hackerrank.com/challenges/find-the-merge-point-of-two-joined-linked-lists

'use strict';

module.exports = findMergeNode;

const { SinglyLinkedList } = require('..');

function findMergeNode(head1, head2) {
    for (let node1 = head1; node1; node1 = node1.next)
        for (let node2 = head2; node2; node2 = node2.next)
            if (node1 === node2)
                return node1.data;
    return null;
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
        const index  = Number(readLine());

        const size1  = Number(readLine());
        const llist1 = Array(size1).fill().reduce((llist) => (
            (llist.insertNode(Number(readLine())), llist)
        ), new SinglyLinkedList());

        const size2  = Number(readLine());
        const llist2 = Array(size2).fill().reduce((llist) => (
            (llist.insertNode(Number(readLine())), llist)
        ), new SinglyLinkedList());

        for (var ptr1 = llist1.head, i = 0; i < index && i < size1; ptr1 = ptr1.next, i++);
        for (var ptr2 = llist2.head; ptr2.next; ptr2 = ptr2.next);
        ptr2.next = ptr1;

        let result = findMergeNode(llist1.head, llist2.head);

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
