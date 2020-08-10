// https://www.hackerrank.com/challenges/kaprekar-numbers/problem

'use strict';

module.exports = modifiedKaprekarNumbers;

function modifiedKaprekarNumbers(p, q) {
    let numbers = [...Array(q - p + 1).keys()].map(i => i + p);
    return numbers.filter(isKaprecarNumber);
}

function isKaprecarNumber(n) {
    let square = (n * n).toString();
    let left   = square.slice(0, square.length / 2);
    let right  = square.slice(square.length / 2);
    return n == (parseInt(left, 10) || 0) + parseInt(right, 10);
}

// --------------- HackerRank runtime -----------------

const fs = require('fs');

let inputString = '';
let currentLine = 0;

function readLine() {
    return inputString[currentLine++];
}

function main() {
    const p = parseInt(readLine(), 10);
    const q = parseInt(readLine(), 10);
    const result = modifiedKaprekarNumbers(p, q);

    const ws = process.env.OUTPUT_PATH ? fs.createWriteStream(process.env.OUTPUT_PATH) : process.stdout;
    ws.write((result.length == 0 ? 'INVALID RANGE' : result.join(' ')) + '\n');
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
