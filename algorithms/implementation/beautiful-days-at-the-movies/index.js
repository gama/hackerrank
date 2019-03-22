// https://www.hackerrank.com/challenges/beautiful-days-at-the-movies

'use strict';

module.exports = beautifulDays;

function beautifulDays(startDay, endDay, divisor) {
    const days = Array(endDay - startDay + 1).fill().map((_, day) => day + startDay);
    return days.reduce((sum, day) => {
        const reverse = parseInt([...(day).toString()].reverse().join(''), 10);
        return sum + Number(Number.isInteger((day - reverse) / divisor));
    }, 0);
}

// --------------- HackerRank runtime -----------------

const fs = require('fs');

let inputString = '';
let currentLine = 0;

function readLine() {
    return inputString[currentLine++];
}

function main() {
    const ijk = readLine().split(' ');
    const i   = parseInt(ijk[0], 10);
    const j   = parseInt(ijk[1], 10);
    const k   = parseInt(ijk[2], 10);

    let result = beautifulDays(i, j, k);

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
