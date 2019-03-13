// https://www.hackerrank.com/challenges/simple-array-sum

'use strict';

module.exports = diagonalDifference;

function diagonalDifference(arr) {
    const size      = arr.length;
    const primary   = arr.reduce((sum, row, idx) => sum + row[idx], 0);
    const secondary = arr.reduce((sum, row, idx) => sum + row[size - idx - 1], 0);
    return Math.abs(primary - secondary);
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
    const n  = parseInt(readLine(), 10);
    let arr  = Array(n);

    for (let i = 0; i < n; i++)
        arr[i] = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const result = diagonalDifference(arr);
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
