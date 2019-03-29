// https://www.hackerrank.com/challenges/equality-in-a-array

'use strict';

module.exports = equalizeArray;

function equalizeArray(arr) {
    const counts = arr.reduce((counts, e) => (counts[e] = (counts[e] || 0) + 1, counts), {});
    return arr.length - Math.max(...Object.values(counts));
}

// --------------- HackerRank runtime -----------------

const fs = require('fs');

let inputString = '';
let currentLine = 0;

function readLine() {
    return inputString[currentLine++];
}

function main() {
    const n      = parseInt(readLine(), 10);  // eslint-disable-line no-unused-vars
    const arr    = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
    const result = equalizeArray(arr);

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
