// https://www.hackerrank.com/challenges/sock-merchant

'use strict';

module.exports = sockMerchant;

function sockMerchant(socks) {
    const countByColor = socks.reduce((counts, sock) => (counts[sock] = (counts[sock] || 0) + 1, counts), {});
    return Object.values(countByColor).reduce((sum, count) => sum + Math.floor(count / 2), 0);
}

// --------------- HackerRank runtime -----------------

const fs = require('fs');

let inputString = '';
let currentLine = 0;

function readLine() {
    return inputString[currentLine++];
}

function main() {
    // copy parse input from hackerrank
    const n      = parseInt(readLine(), 10);  // eslint-disable-line no-unused-vars
    const ar     = readLine().split(' ').map(arTemp => parseInt(arTemp, 10));
    const result = sockMerchant(ar);

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
