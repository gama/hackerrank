// https://www.hackerrank.com/challenges/cut-the-sticks

'use strict';

module.exports = cutTheSticks;

function cutTheSticks(sticks) {
    const counts = sticks.reduce((c, e) => (c[e] = (c[e] || 0) + 1, c), []).filter(Number);
    let   rest   = sticks.length;
    return counts.map((count) => (rest -= count, rest + count));
}

// --------------- HackerRank runtime -----------------

const fs = require('fs');

let inputString = '';
let currentLine = 0;

function readLine() {
    return inputString[currentLine++];
}

function main() {
    const n   = parseInt(readLine(), 10);  // eslint-disable-line no-unused-vars
    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    let result = cutTheSticks(arr);

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
