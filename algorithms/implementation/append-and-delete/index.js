// https://www.hackerrank.com/challenges/append-and-delete

'use strict';

module.exports = appendAndDelete;

function appendAndDelete(startStr, targetStr, numOps) {
    if ((startStr.length + targetStr.length) <= numOps)
        return 'Yes';

    const prefixLen      = commonPrefixLength(startStr, targetStr);
    const afterPrefixLen = startStr.length - prefixLen + targetStr.length - prefixLen;
    const opsDiff        = (numOps - afterPrefixLen);
    return (opsDiff >= 0 && (opsDiff % 2) === 0) ? 'Yes' : 'No';
}

function commonPrefixLength(a, b) {
    for (let i = 0; i < a.length && i < b.length; ++i)
        if (a[i] !== b[i])
            return i;
    return Math.min(a.length, b.length);
}

// --------------- HackerRank runtime -----------------

const fs = require('fs');

let inputString = '';
let currentLine = 0;

function readLine() {
    return inputString[currentLine++];
}

function main() {
    const s = readLine();
    const t = readLine();
    const k = parseInt(readLine(), 10);

    let result = appendAndDelete(s, t, k);

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
