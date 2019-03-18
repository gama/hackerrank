// https://www.hackerrank.com/challenges/between-two-sets

'use strict';

module.exports = { inBetweenSets, countInBetweenSets };

function inBetweenSets(a, b) {
    a = a.sort();
    b = b.sort();

    const between = [];
    const lastA   = a[a.length - 1];
    const firstB  = b[0];
    for (let i = lastA; i <= firstB; i += lastA)
        if (a.every(x => (i % x) == 0) && (b.every(x => (x % i) == 0)))
            between.push(i);

    return between;
}

function countInBetweenSets(a, b) {
    return inBetweenSets(a, b).length;
}

// --------------- HackerRank runtime -----------------

const fs = require('fs');

let inputString = '';
let currentLine = 0;

function readLine() {
    return inputString[currentLine++];
}

function main() {
    const nm  = readLine().split(' ');
    const n   = parseInt(nm[0], 10);  // eslint-disable-line no-unused-vars
    const m   = parseInt(nm[1], 10);  // eslint-disable-line no-unused-vars
    const a   = readLine().split(' ').map(aTemp => parseInt(aTemp, 10));
    const b   = readLine().split(' ').map(bTemp => parseInt(bTemp, 10));
    let total = countInBetweenSets(a, b);

    const ws = process.env.OUTPUT_PATH ? fs.createWriteStream(process.env.OUTPUT_PATH) : process.stdout;
    ws.write(total + '\n');
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
