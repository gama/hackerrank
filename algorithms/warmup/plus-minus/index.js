// https://www.hackerrank.com/challenges/plus-minus/

'use strict';

module.exports = plusMinus;

function plusMinus(arr) {
    let numPositives = 0, numNegatives = 0, numZeros = 0;
    arr.forEach(num => {
        if (num > 0) numPositives++;
        else if (num < 0) numNegatives++;
        else numZeros++;
    });

    return [
        (numPositives / arr.length).toFixed(6),
        (numNegatives / arr.length).toFixed(6),
        (numZeros     / arr.length).toFixed(6)
    ];
}

// --------------- HackerRank runtime -----------------

const fs = require('fs');

let inputString = '';
let currentLine = 0;

function readLine() {
    return inputString[currentLine++];
}

function main() {
    const ws     = process.env.OUTPUT_PATH ? fs.createWriteStream(process.env.OUTPUT_PATH) : process.stdout;
    const n      = parseInt(readLine(), 10); // eslint-disable-line no-unused-vars
    const arr    = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
    const result = plusMinus(arr);
    ws.write(result.join('\n'));
    ws.end('\n');
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
