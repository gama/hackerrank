// https://www.hackerrank.com/challenges/circular-array-rotation

'use strict';

module.exports = circularArrayRotation;

function circularArrayRotation(array, count, queries) {
    return queries.map((query) => {
        return array[(array.length - (count % array.length) + query) % array.length];
    });
}

// --------------- HackerRank runtime -----------------

const fs = require('fs');

let inputString = '';
let currentLine = 0;

function readLine() {
    return inputString[currentLine++];
}


function main() {
    const nkq     = readLine().split(' ');
    const n       = parseInt(nkq[0], 10);  // eslint-disable-line no-unused-vars
    const k       = parseInt(nkq[1], 10);
    const q       = parseInt(nkq[2], 10);
    const a       = readLine().split(' ').map(aTemp => parseInt(aTemp, 10));
    const queries = Array(q).fill().map(() => parseInt(readLine(), 10));

    const result = circularArrayRotation(a, k, queries);

    const ws = process.env.OUTPUT_PATH ? fs.createWriteStream(process.env.OUTPUT_PATH) : process.stdout;
    ws.write(result.join('\n') + '\n');
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
