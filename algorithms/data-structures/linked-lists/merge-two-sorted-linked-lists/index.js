// https://www.hackerrank.com/challenges/merge-two-sorted-linked-lists

'use strict';

module.exports = mergeLists;

const { SinglyLinkedList } = require('..');

function mergeLists(head1, head2) {
    const merged = new SinglyLinkedList();

    for (let node1 = head1, node2 = head2; node1 || node2;) {
        const data1 = node1 ? node1.data : Number.MAX_SAFE_INTEGER;
        const data2 = node2 ? node2.data : Number.MAX_SAFE_INTEGER;
        const data  = (data1 <= data2)
            ? (node1 = node1.next, data1)
            : (node2 = node2.next, data2);
        merged.insertNode(data);
    }

    return merged;
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

        const merged = new SinglyLinkedList();
        merged.head  = mergeLists(llist1.head, llist2.head);
        console.log(merged.print(' ') + '\n');
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
