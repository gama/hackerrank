// https://www.hackerrank.com/challenges/staircase

'use strict';

module.exports = staircase;

function staircase(n) {
    return [...Array(n).keys()].map(step => {
        return ' '.repeat(n - step - 1) + '#'.repeat(step + 1) + '\n';
    }).join('');
}

// --------------- HackerRank runtime -----------------

const fs = require('fs');

let inputString = '';
let currentLine = 0;

function readLine() {
    return inputString[currentLine++];
}

function main() {
    const n      = parseInt(readLine(), 10);
    const result = staircase(n);
    const ws     = process.env.OUTPUT_PATH ? fs.createWriteStream(process.env.OUTPUT_PATH) : process.stdout;
    ws.end(result);
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
