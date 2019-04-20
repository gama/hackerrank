// https://www.hackerrank.com/challenges/reverse-a-doubly-linked-list

'use strict';

module.exports = reverse;

const { DoublyLinkedList } = require('..');

// warning: this implementation reverses the list "inplace"
function reverse(head) {
    if (!head)
        return head;

    for (
        var prev = null, curr = head, next = head.next;
        curr != null;
        prev = curr, curr = next, next = next && next.next
    ) {
        curr.next = prev;
        curr.prev = next;
    }
    return prev;
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
        ), new DoublyLinkedList());

        const rlist = new DoublyLinkedList();
        rlist.head  = reverse(llist.head);
        ws.write(rlist.print(' ') + '\n');
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
