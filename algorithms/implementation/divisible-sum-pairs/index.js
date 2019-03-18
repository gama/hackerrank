// https://www.hackerrank.com/challenges/divisible-sum-pairs

'use strict';

module.exports = divisibleSumPairs;

function divisibleSumPairs(k, arr) {
    const pairs = [];
    for (let i = 0; i < (arr.length - 1); ++i)
        for (let j = (i + 1); j < arr.length; ++j)
            if (((arr[i] + arr[j]) % k) === 0)
                pairs.push([i, j]);

    return pairs;
}

// --------------- HackerRank runtime -----------------

const fs = require('fs');

let inputString = '';
let currentLine = 0;

function readLine() {
    return inputString[currentLine++];
}

function main() {
    const nk   = readLine().split(' ');
    // const n = parseInt(nk[0], 10);
    const k    = parseInt(nk[1], 10);
    const ar   = readLine().split(' ').map(arTemp => parseInt(arTemp, 10));
    let result = divisibleSumPairs(k, ar);

    const ws = process.env.OUTPUT_PATH ? fs.createWriteStream(process.env.OUTPUT_PATH) : process.stdout;
    ws.write(result.length + '\n');
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
