// http://www.hackerrank.com/challenges/the-birthday-bar

'use strict';

module.exports = birthday;

const assert = require('assert');

function birthday(squares, day, month) {
    assert(squares.length >= month); 

    const segments = [];
    for (let i = 0; i <= (squares.length - month); ++i) {
        const segment = squares.slice(i, i + month);
        const sum     = segment.reduce((sum, square) => sum + square, 0);
        if (sum === day)
            segments.push(segment);
    }

    return segments;
}

// --------------- HackerRank runtime -----------------

const fs = require('fs');

let inputString = '';
let currentLine = 0;

function readLine() {
    return inputString[currentLine++];
}

function main() {
    const n      = parseInt(readLine().trim(), 10);  // eslint-disable-line no-unused-vars
    const s      = readLine().replace(/\s+$/g, '').split(' ').map(sTemp => parseInt(sTemp, 10));
    const dm     = readLine().replace(/\s+$/g, '').split(' ');
    const d      = parseInt(dm[0], 10);
    const m      = parseInt(dm[1], 10);
    const result = birthday(s, d, m);

    const ws = process.env.OUTPUT_PATH ? fs.createWriteStream(process.env.OUTPUT_PATH) : process.stdout;
    ws.write(result.length + '\n');
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
