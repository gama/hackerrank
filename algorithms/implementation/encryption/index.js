// https://www.hackerrank.com/challenges/REPLACE NAME

'use strict';

module.exports = encryption;

function encryption(input) {
    const stripped     = input.replace(/ /g, '');
    const lBound       = Math.floor(Math.sqrt(stripped.length));
    const uBound       = Math.ceil(Math.sqrt(stripped.length));
    const [rows, cols] = selectGrid(lBound, uBound, stripped.length);

    const grid = stripped.match(new RegExp(`[a-z]{0,${cols}}`, 'g')).filter(Boolean);
    if (rows !== grid.length) throw 'invalid grid';

    return Array(cols).fill().map((_, i) => (
        grid.map(row => row.charAt(i)).join('')
    )).join(' ');
}

function selectGrid(lBound, uBound, minArea) {
    if (lBound === uBound)
        return [lBound, uBound];

    const grids = [[lBound, lBound], [lBound, uBound], [uBound, uBound]];
    return grids
        .sort(([rowA, colA], [rowB, colB]) => (rowA * colA) - (rowB * colB))
        .find(([rows, cols]) => rows * cols >= minArea);
}

// --------------- HackerRank runtime -----------------

const fs = require('fs');

let inputString = '';
let currentLine = 0;

function readLine() {
    return inputString[currentLine++];
}

function main() {
    const input  = readLine();
    const result = encryption(input);

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
