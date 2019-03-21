// https://www.hackerrank.com/challenges/the-hurdle-race

'use strict';

module.exports = hurdleRace;

function hurdleRace(danMaxHeight, hurdleHeights) {
    return Math.max(0, Math.max.apply(null, hurdleHeights) - danMaxHeight);
}

// --------------- HackerRank runtime -----------------

const fs = require('fs');

let inputString = '';
let currentLine = 0;

function readLine() {
    return inputString[currentLine++];
}

function main() {
    const nk     = readLine().split(' ');
    const n      = parseInt(nk[0], 10);  // eslint-disable-line no-unused-vars
    const k      = parseInt(nk[1], 10);
    const height = readLine().split(' ').map(heightTemp => parseInt(heightTemp, 10));

    let result = hurdleRace(k, height);

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
