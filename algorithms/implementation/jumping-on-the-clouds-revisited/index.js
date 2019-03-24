// https://www.hackerrank.com/challenges/jumping-on-the-clouds-revisited

'use strict';

module.exports = jumpingOnClouds;

const INITIAL_ENERGY = 100;

function jumpingOnClouds(clouds, k) {
    let energy = INITIAL_ENERGY, i = 0;
    do {
        i = (i < clouds.length - k) ? i + k : 0;
        energy -= clouds[i] ? 3 : 1;
    } while (i < clouds.length && (i % clouds.length) !== 0);
    return energy;
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
    const c  = readLine().split(' ').map(cTemp => parseInt(cTemp, 10));

    const result = jumpingOnClouds(c, k);

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
