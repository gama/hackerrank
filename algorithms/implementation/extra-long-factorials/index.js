// https://www.hackerrank.com/challenges/extra-long-factorials

'use strict';

module.exports = extraLongFactorials;

function extraLongFactorials(n) {
    return Array(n).fill().reduce((factorial, _, i) => {
        return factorial * BigInt(i + 1);
    }, BigInt(1));
}

// --------------- HackerRank runtime -----------------

const fs = require('fs');

let inputString = '';
let currentLine = 0;

function readLine() {
    return inputString[currentLine++];
}

function main() {
    const n = parseInt(readLine(), 10);
    const result = extraLongFactorials(n);

    const ws = process.env.OUTPUT_PATH ? fs.createWriteStream(process.env.OUTPUT_PATH) : process.stdout;
    ws.write(result.toString() + '\n');
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
