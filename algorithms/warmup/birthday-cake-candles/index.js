// https://www.hackerrank.com/challenges/birthday-cake-candles

'use strict';

module.exports = birthdayCakeCandles;

function birthdayCakeCandles(arr) {
    let max = -1, numMax = 0;

    for (let el of arr) {
        if (el > max) {
            max = el;
            numMax = 1;
        } else if (el === max)
            numMax++;
    }

    return numMax;
}

// --------------- HackerRank runtime -----------------

const fs = require('fs');

let inputString = '';
let currentLine = 0;

function readLine() {
    return inputString[currentLine++];
}

function main() {
    const count  = parseInt(readLine(), 10);  // eslint-disable-line no-unused-vars
    const arr    = readLine().split(' ').map(arTemp => parseInt(arTemp, 10));
    const result = birthdayCakeCandles(arr);
    const ws     = process.env.OUTPUT_PATH ? fs.createWriteStream(process.env.OUTPUT_PATH) : process.stdout;
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
