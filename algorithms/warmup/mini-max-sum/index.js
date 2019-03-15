// https://www.hackerrank.com/challenges/mini-max-sum

'use strict';

module.exports = miniMaxSum;

function miniMaxSum(arr) {
    const sum = arr.reduce((sum, el) => sum + el, 0);
    const min = Math.min.apply(null, arr);
    const max = Math.max.apply(null, arr);
    return [sum - max, sum - min];
}

// --------------- HackerRank runtime -----------------

const fs = require('fs');

let inputString = '';
let currentLine = 0;

function readLine() {
    return inputString[currentLine++];
}

function main() {
    const arr    = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
    const result = miniMaxSum(arr);
    const ws     = process.env.OUTPUT_PATH ? fs.createWriteStream(process.env.OUTPUT_PATH) : process.stdout;
    ws.end(result.join(' ') + '\n');
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
