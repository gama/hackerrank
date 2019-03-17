// https://www.hackerrank.com/challenges/apples-and-oranges

'use strict';

module.exports = countApplesAndOranges;

function countApplesAndOranges(start, end, appleTreePos, orangeTreePos, apples, oranges) {
    const countInRange = (arr, refPointPos) => arr.reduce((sum, relativePos) => {
        const absolutePos = refPointPos + relativePos;
        return sum + Number(start <= absolutePos && absolutePos <= end);
    }, 0);
    return [countInRange(apples, appleTreePos), countInRange(oranges, orangeTreePos)];
}

// --------------- HackerRank runtime -----------------

const fs = require('fs');

let inputString = '';
let currentLine = 0;

function readLine() {
    return inputString[currentLine++];
}

function main() {
    const st = readLine().split(' ');
    const s  = parseInt(st[0], 10);
    const t  = parseInt(st[1], 10);
    const ab = readLine().split(' ');
    const a  = parseInt(ab[0], 10);
    const b  = parseInt(ab[1], 10);
    const mn = readLine().split(' ');
    const m  = parseInt(mn[0], 10);  // eslint-disable-line no-unused-vars
    const n  = parseInt(mn[1], 10);  // eslint-disable-line no-unused-vars

    const apples  = readLine().split(' ').map(applesTemp => parseInt(applesTemp, 10));
    const oranges = readLine().split(' ').map(orangesTemp => parseInt(orangesTemp, 10));
    const result  = countApplesAndOranges(s, t, a, b, apples, oranges);

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
