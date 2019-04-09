// https://www.hackerrank.com/challenges/crush

'use strict';

module.exports = arrayManipulation;

function arrayManipulation(size, queries) {
    const starts = {}, ends = {};
    queries.forEach(([startIdx, endIdx, value]) => {
        starts[startIdx] = (starts[startIdx] || 0) + value;
        ends[endIdx]     = (ends[endIdx] || 0) + value;
    });

    let max  = 0, curr = 0;
    const indexes = Array.from(
        new Set(Object.keys(starts).concat(Object.keys(ends)))
    ).sort((a, b) => a - b);
    indexes.forEach((idx) => {
        curr += starts[idx] || 0;
        max   = Math.max(curr, max);
        curr -= ends[idx] || 0;
    });

    return max;
}

// eslint-disable-next-line no-unused-vars
function arrayManipulationSlow(size, queries) {
    let array = Array(size).fill(0);
    queries.forEach(([lBound, uBound, value]) => {
        for (let i = lBound; i <= uBound; ++i)
            array[i - 1] += value;
    });
    return Math.max(...array);
}

// --------------- HackerRank runtime -----------------

const fs = require('fs');

let inputString = '';
let currentLine = 0;

function readLine() {
    return inputString[currentLine++];
}

function main() {
    const nm = readLine().split(' ');
    const queries = Array(Number(nm[1]))
        .fill()
        .map(() => readLine().split(' ').map(Number));

    let result = arrayManipulation(Number(nm[0]), queries);

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
