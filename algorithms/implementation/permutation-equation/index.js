// https://www.hackerrank.com/challenges/permutation-equation

'use strict';

module.exports = permutationEquation;

function permutationEquation(arr) {
    const idxMap = arr.reduce((rev, el, idx) => (rev[el] = idx + 1, rev), []);
    return arr.map((_, idx) => idxMap[idxMap[idx + 1]]);
}

// --------------- HackerRank runtime -----------------

const fs = require('fs');

let inputString = '';
let currentLine = 0;

function readLine() {
    return inputString[currentLine++];
}

function main() {
    const n = parseInt(readLine(), 10);  // eslint-disable-line no-unused-vars
    const p = readLine().split(' ').map(pTemp => parseInt(pTemp, 10));
    let result = permutationEquation(p);

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
