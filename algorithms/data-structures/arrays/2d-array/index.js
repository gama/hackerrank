// https://www.hackerrank.com/challenges/2d-array

'use strict';

module.exports = hourglassSum;

function hourglassSum(matrix) {
    let maxSum = Number.MIN_SAFE_INTEGER;
    for (let y = 0; y < (matrix.length - 2); ++y) {
        for (let x = 0; x < (matrix[y].length - 2); ++x) {
            const sum = singleHourglassSum(matrix, x, y);
            if (sum > maxSum)
                maxSum = sum;
        }
    }

    return maxSum;
}

function singleHourglassSum(matrix, xOffset, yOffset) {
    return matrix[yOffset + 0][xOffset + 0] +
           matrix[yOffset + 0][xOffset + 1] +
           matrix[yOffset + 0][xOffset + 2] +
           matrix[yOffset + 1][xOffset + 1] +
           matrix[yOffset + 2][xOffset + 0] +
           matrix[yOffset + 2][xOffset + 1] +
           matrix[yOffset + 2][xOffset + 2];
}

// --------------- HackerRank runtime -----------------

const fs = require('fs');

let inputString = '';
let currentLine = 0;

function readLine() {
    return inputString[currentLine++];
}

function main() {
    const arr = Array(6).fill().map(() => (
        readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10))
    ));

    const result = hourglassSum(arr);

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
