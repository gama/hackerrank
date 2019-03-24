// https://www.hackerrank.com/challenges/sherlock-and-squares

'use strict';

module.exports = squares;

function squares(start, end) {
    return Math.floor(Math.sqrt(end)) - Math.ceil(Math.sqrt(start)) +  + 1;
}

// --------------- HackerRank runtime -----------------

const fs = require('fs');

let inputString = '';
let currentLine = 0;

function readLine() {
    return inputString[currentLine++];
}

function main() {
    const q = parseInt(readLine(), 10);
    const result = Array(q).fill().map(() => {
        const ab = readLine().split(' ');
        const a = parseInt(ab[0], 10);
        const b = parseInt(ab[1], 10);
        return squares(a, b);
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
