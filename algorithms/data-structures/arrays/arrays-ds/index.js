// https://www.hackerrank.com/challenges/arrays-ds

'use strict';

module.exports = reverseArray;

function reverseArray(arr) {
    // or just return arr.reverse(), but that's trivial :-P
    const out = Array(arr.length);
    for (let i = 0; i < arr.length; ++i)
        out[arr.length - 1 - i] = arr[i];
    return out;
}

// --------------- HackerRank runtime -----------------

const fs = require('fs');

let inputString = '';
let currentLine = 0;

function readLine() {
    return inputString[currentLine++];
}

function main() {
    const arrCount = parseInt(readLine(), 10);  // eslint-disable-line no-unused-vars
    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
    const result = reverseArray(arr);

    const ws = process.env.OUTPUT_PATH ? fs.createWriteStream(process.env.OUTPUT_PATH) : process.stdout;
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
