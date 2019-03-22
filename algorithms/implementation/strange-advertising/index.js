// https://www.hackerrank.com/challenges/strange-advertising

'use strict';

module.exports = viralAdvertising;

const INITIAL_SHARE = 5;
const SHARE_RATIO   = 3;
const LIKE_RATIO    = 2;
const SL_RATIO      = SHARE_RATIO / LIKE_RATIO;
const INITIAL_LIKE  = Math.floor(INITIAL_SHARE / LIKE_RATIO);

function viralAdvertising(day) {
    console.log(Array(day - 1).fill().reduce((liked) => liked.concat(Math.floor(SL_RATIO * liked[liked.length - 1])), [INITIAL_LIKE]));
    return Array(day - 1).fill()
        .reduce((liked) => liked.concat(Math.floor(SL_RATIO * liked[liked.length - 1])), [INITIAL_LIKE])
        .reduce((sum, e) => sum + e);
}

// eslint-disable-next-line no-unused-vars
function viralAdvertisingImperative(day) {
    let shared = INITIAL_SHARE;
    let total  = 0;
    while (day-- > 0) {
        const liked = Math.floor(shared / LIKE_RATIO);
        shared = SHARE_RATIO * liked;
        total += liked;
    }
    return total;
}


// approx. formula:
// shares = pow(3 / 2, n) - sum(3/4 + 9/16 + ... pow(3 / 4, n))

// --------------- HackerRank runtime -----------------

const fs = require('fs');

let inputString = '';
let currentLine = 0;

function readLine() {
    return inputString[currentLine++];
}

function main() {
    // copy parse input from hackerrank
    const n = parseInt(readLine(), 10);
    const result = viralAdvertising(n);

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
