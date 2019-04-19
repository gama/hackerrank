// https://www.hackerrank.com/challenges/detect-whether-a-linked-list-contains-a-cycle

'use strict';

module.exports = hasCycle;

const { SinglyLinkedList, SinglyLinkedListNode } = require('..');

function hasCycle(head) {
    let p1 = head, p2 = head;
    while (p1 && p2) {
        p1 = p1.next;
        p2 = p2.next;
        if (p2) p2 = p2.next;

        if ((p1 || p2) && p1 === p2)
            return true;
    }
    return false;
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
        const index = parseInt(readLine(), 10);
        const size  = Number(readLine());
        const llist = Array(size).fill().reduce((llist) => (
            (llist.insertNode(Number(readLine())), llist)
        ), new SinglyLinkedList());

        let extra = new SinglyLinkedListNode(-1);
        let temp  = llist.head;
        for (let i = 0; i < size; i++) {
            if (i == index)
                extra = temp;
            if (i !== (size - 1))
                temp = temp.next;
        }
        temp.next = extra;

        const result = hasCycle(llist.head);
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
