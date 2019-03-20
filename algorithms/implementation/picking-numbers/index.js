// https://www.hackerrank.com/challenges/picking-numbers

'use strict';

module.exports = pickingNumbers;

function pickingNumbers(arr) {
    const counts = arr.reduce((counts, i) => (counts[i] = (counts[i] || 0) + 1, counts), {});
    const countsWithNeighbors = Object.keys(counts).map(i => {
        return Math.max(counts[i] + (counts[i + 1] || 0), counts[i] + (counts[i - 1] || 0));
    });
    return Math.max.apply(null, countsWithNeighbors);
}

// --------------- HackerRank runtime -----------------

const fs = require('fs');

let inputString = '';
let currentLine = 0;

function readLine() {
    return inputString[currentLine++];
}

function main() {
    const n      = parseInt(readLine().trim(), 10);  // eslint-disable-line no-unused-vars
    const a      = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));
    const result = pickingNumbers(a);

    const ws = process.env.OUTPUT_PATH ? fs.createWriteStream(process.env.OUTPUT_PATH) : process.stdout;
    ws.write(result + '\n');
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
