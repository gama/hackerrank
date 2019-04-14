// https://www.hackerrank.com/challenges/reverse-a-linked-list

'use strict';

module.exports = reverse;

const { SinglyLinkedList, SinglyLinkedListNode } = require('..');

function reverse(head) {
    let llist = new SinglyLinkedList();
    for (let curr = head; curr; curr = curr.next) {
        const node = new SinglyLinkedListNode();
        node.data  = curr.data;
        node.next  = llist.head;
        llist.head = node;
    }
    return llist;
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

        const reversedList = reverse(llist.head);
        ws.write(reversedList.print());
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
