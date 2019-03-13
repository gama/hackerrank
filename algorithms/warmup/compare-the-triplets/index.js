// https://www.hackerrank.com/challenges/simple-array-sum

'use strict';

module.exports = compareTriplets;

const assert = require('assert');

function compareTriplets(a, b) {
    assert(a.length === 3 && b.length === 3);

    return [
        a.reduce((acc, _, idx) => acc + Number(a[idx] > b[idx]), 0),
        a.reduce((acc, _, idx) => acc + Number(b[idx] > a[idx]), 0),
    ];
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
    const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));
    const b = readLine().replace(/\s+$/g, '').split(' ').map(bTemp => parseInt(bTemp, 10));
    const result = compareTriplets(a, b);

    ws.write(result.join(' ') + '\n');
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
