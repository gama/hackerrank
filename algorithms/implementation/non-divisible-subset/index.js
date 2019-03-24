// https://www.hackerrank.com/challenges/non-divisible-subset

'use strict';

module.exports = nonDivisibleSubset;

function nonDivisibleSubset(k, set) {
    const mods   = set.map(x => x % k);
    const counts = mods.reduce((counts, m) => (counts.set(m, (counts.get(m) || 0) + 1), counts), new Map());
    return [...counts.keys()].reduce((total, mod) => {
        if (mod <= (k - mod) || !counts.has(k - mod)) {
            const samePair = (mod === (k - mod)) || mod === 0;
            total += samePair ? 1 : Math.max(counts.get(mod) || 0, counts.get(k - mod) || 0);
        }
        return total;
    }, 0);
}

// --------------- HackerRank runtime -----------------

const fs = require('fs');

let inputString = '';
let currentLine = 0;

function readLine() {
    return inputString[currentLine++];
}

function main() {
    const nk = readLine().split(' ');
    const n  = parseInt(nk[0], 10);  // eslint-disable-line no-unused-vars
    const k  = parseInt(nk[1], 10);
    const S  = readLine().split(' ').map(STemp => parseInt(STemp, 10));

    let result = nonDivisibleSubset(k, S);

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
