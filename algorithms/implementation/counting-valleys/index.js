// https://www.hackerrank.com/challenges/sock-merchant

'use strict';

module.exports = sockMerchant;

function sockMerchant(n, arr) {
    return n + arr;
}

// --------------- HackerRank runtime -----------------

const fs = require('fs');

let inputString = '';
let currentLine = 0;

function readLine() {
    return inputString[currentLine++];
}

function main() {
    const n    = parseInt(readLine(), 10);
    const ar   = readLine().split(' ').map(arTemp => parseInt(arTemp, 10));
    let result = sockMerchant(n, ar);

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
