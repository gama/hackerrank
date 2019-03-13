// https://www.hackerrank.com/challenges/a-very-big-sum

'use strict';

module.exports = aVeryBigSum;

function aVeryBigSum(ar) {
    return ar.reduce((acc, el) => acc + el, 0);
}

// --------------- HackerRank runtime -----------------

const fs = require('fs');

let inputString = '';
let currentLine = 0;

function readLine() {
    return inputString[currentLine++];
}

function main() {
    const ws = process.env.OUTPUT_PATH ? fs.createWriteStream(process.env.OUTPUT_PATH) : process.stdout;
    const arCount = parseInt(readLine(), 10);   // eslint-disable-line no-unused-vars
    const ar = readLine().split(' ').map(arTemp => parseInt(arTemp, 10));

    let result = aVeryBigSum(ar);
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
        inputString = inputString.replace(/\s*$/, '')
            .split('\n')
            .map(str => str.replace(/\s*$/, ''))
        main();
    });
}
