// https://www.hackerrank.com/challenges/save-the-prisoner

'use strict';

module.exports = saveThePrisoner;

function saveThePrisoner(numPrisoners, numSweets, firstPrisoner) {
    return ((firstPrisoner + numSweets - 2) % numPrisoners) + 1;
}

// --------------- HackerRank runtime -----------------

const fs = require('fs');

let inputString = '';
let currentLine = 0;

function readLine() {
    return inputString[currentLine++];
}

function main() {
    const t = parseInt(readLine(), 10);
    const result = Array(t).fill().map(() => {
        const nms = readLine().split(' ');
        const n = parseInt(nms[0], 10);
        const m = parseInt(nms[1], 10);
        const s = parseInt(nms[2], 10);
        return saveThePrisoner(n, m, s);
    });

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
