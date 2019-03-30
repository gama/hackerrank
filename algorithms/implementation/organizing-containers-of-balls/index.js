// https://www.hackerrank.com/challenges/organizing-containers-of-balls

'use strict';

module.exports = organizingContainers;

function organizingContainers(matrix) {
    const rowsSum = matrix.map(row => row.reduce((sum, cell) => sum + cell, 0));
    const colsSum = matrix.reduce((sums, _, idx) => (sums[idx] = matrix.reduce((sum, row) => sum + row[idx],0), sums), []);
    return rowsSum.sort().join() === colsSum.sort().join() ? 'Possible' : 'Impossible';
}

// --------------- HackerRank runtime -----------------

const fs = require('fs');

let inputString = '';
let currentLine = 0;

function readLine() {
    return inputString[currentLine++];
}

function main() {
    const numQueries = parseInt(readLine(), 10);
    const result = Array(numQueries).fill().map(() => {
        const n = parseInt(readLine(), 10);
        const container = Array(n).fill().map(() => {
            readLine().split(' ').map(containerTemp => parseInt(containerTemp, 10));
        });
        return organizingContainers(container);
    });

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
