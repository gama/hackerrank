// https://www.hackerrank.com/challenges/migratory-birds

'use strict';

module.exports = migratoryBirds;

const MAX_BIRD_TYPE = 5;

function migratoryBirds(birdSightings) {
    const countByType = Array(MAX_BIRD_TYPE + 1).fill(0);
    birdSightings.forEach(birdType => countByType[birdType]++);

    return countByType.indexOf(Math.max.apply(null, countByType));
}

// --------------- HackerRank runtime -----------------

const fs = require('fs');

let inputString = '';
let currentLine = 0;

function readLine() {
    return inputString[currentLine++];
}

function main() {
    const arrCount = parseInt(readLine().trim(), 10);  // eslint-disable-line no-unused-vars
    const arr      = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    const result   = migratoryBirds(arr);
    const ws       = process.env.OUTPUT_PATH ? fs.createWriteStream(process.env.OUTPUT_PATH) : process.stdout;
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
