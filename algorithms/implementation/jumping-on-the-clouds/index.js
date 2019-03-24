// https://www.hackerrank.com/challenges/jumping-on-the-clouds

'use strict';

module.exports = jumpingOnClouds;

function jumpingOnClouds(clouds) {
    let jumps = 0;
    for (let pos = 0; pos < (clouds.length - 1); jumps++) {
        const canJump2 = ((pos + 2) < clouds.length && clouds[pos + 2] == 0);
        pos += canJump2 ? 2 : 1;
    }
    return jumps;
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
    const c = readLine().split(' ').map(cTemp => parseInt(cTemp, 10));

    let result = jumpingOnClouds(c);
     
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
