// https://www.hackerrank.com/challenges/library-fine

'use strict';

module.exports = libraryFine;

function libraryFine(d1, m1, y1, d2, m2, y2) {
    if (y1 > y2)
        return 10000;
    if (y1 < y2)
        return 0;
    if (m1 > m2)
        return (m1 - m2) * 500;
    if (m1 < m2)
        return 0;
    if (d1 > d2)
        return (d1 - d2) * 15;
    return 0;
}

// --------------- HackerRank runtime -----------------

const fs = require('fs');

let inputString = '';
let currentLine = 0;

function readLine() {
    return inputString[currentLine++];
}

function main() {
    const d1M1Y1 = readLine().split(' ');
    const d1 = parseInt(d1M1Y1[0], 10);
    const m1 = parseInt(d1M1Y1[1], 10);
    const y1 = parseInt(d1M1Y1[2], 10);

    const d2M2Y2 = readLine().split(' ');
    const d2 = parseInt(d2M2Y2[0], 10);
    const m2 = parseInt(d2M2Y2[1], 10);
    const y2 = parseInt(d2M2Y2[2], 10);

    let result = libraryFine(d1, m1, y1, d2, m2, y2);

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
