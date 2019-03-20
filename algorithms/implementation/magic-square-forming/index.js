// https://www.hackerrank.com/challenges/magic-square-forming

'use strict';

module.exports = formingMagicSquare;

function formingMagicSquare(inputMatrix) {
    magicSquares = magicSquares || generateMagicSquares();
    
    const inputFlattened = inputMatrix.reduce((arr, row) => arr.concat(row), []);
    return Math.min.apply(null, magicSquares.map((square) => arrayDistance(square, inputFlattened)));
}

function generateMagicSquares(matrix = [1, 2, 3, 4, 5, 6, 7, 8, 9], pos = 0) {
    if (pos === matrix.length)
        return isMagicSquare(matrix) ? [[...matrix]]: [];

    const magicSquares = [];
    const copy = [...matrix];
    for (let i = pos; i < matrix.length; ++i)
        magicSquares.push(...generateMagicSquares(matrixSwap(copy, pos, i), pos + 1));
    return magicSquares;
}

const MAGIC_CONSTANT = 15;
function isMagicSquare(m) {
    return m[0] + m[1] + m[2] === MAGIC_CONSTANT &&
           m[3] + m[4] + m[5] === MAGIC_CONSTANT && 
           m[6] + m[7] + m[8] === MAGIC_CONSTANT && 
           m[0] + m[3] + m[6] === MAGIC_CONSTANT &&
           m[1] + m[4] + m[7] === MAGIC_CONSTANT &&
           m[2] + m[5] + m[8] === MAGIC_CONSTANT && 
           m[0] + m[4] + m[8] === MAGIC_CONSTANT && 
           m[2] + m[4] + m[6] === MAGIC_CONSTANT;
}

function matrixSwap(matrix, i, j) {
    if (i !== j)
        [matrix[i], matrix[j]] = [matrix[j], matrix[i]];
    return matrix;
}

function arrayDistance(arr1, arr2) {
    return arr1.reduce((dist, _, i) => dist + Math.abs(arr1[i] - arr2[i]), 0);
}

let magicSquares = null;
// optionally, use the precomputed "const MAGIC_SQUARES", if performance is critical
// const magicSquares = [
//     [[ 2, 7, 6 ], [ 9, 5, 1 ], [ 4, 3, 8 ]],
//     [[ 2, 9, 4 ], [ 7, 5, 3 ], [ 6, 1, 8 ]],
//     [[ 4, 3, 8 ], [ 9, 5, 1 ], [ 2, 7, 6 ]],
//     [[ 4, 9, 2 ], [ 3, 5, 7 ], [ 8, 1, 6 ]],
//     [[ 6, 1, 8 ], [ 7, 5, 3 ], [ 2, 9, 4 ]],
//     [[ 6, 7, 2 ], [ 1, 5, 9 ], [ 8, 3, 4 ]],
//     [[ 8, 1, 6 ], [ 3, 5, 7 ], [ 4, 9, 2 ]],
//     [[ 8, 3, 4 ], [ 1, 5, 9 ], [ 6, 7, 2 ]]
// ];

// --------------- HackerRank runtime -----------------

const fs = require('fs');

let inputString = '';
let currentLine = 0;

function readLine() {
    return inputString[currentLine++];
}

function main() {
    let s = Array(3);
    for (let i = 0; i < 3; i++)
        s[i] = readLine().split(' ').map(sTemp => parseInt(sTemp, 10));

    const result = formingMagicSquare(s);

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
