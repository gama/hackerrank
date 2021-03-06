// https://www.hackerrank.com/challenges/breaking-best-and-worst-records

'use strict';

module.exports = breakingRecords;

function breakingRecords(scores) {
    let max    = scores[0];
    let min    = scores[0];
    let numMax = 0;
    let numMin = 0;

    for (let score of scores.slice(1)) {
        if (score > max) {
            max = score;   
            numMax++;
        }
        if (score < min) {
            min = score;
            numMin++;
        }
    }

    return [numMax, numMin];
}

// --------------- HackerRank runtime -----------------

const fs = require('fs');

let inputString = '';
let currentLine = 0;

function readLine() {
    return inputString[currentLine++];
}

function main() {
    const n      = parseInt(readLine(), 10);  // eslint-disable-line no-unused-vars
    const scores = readLine().split(' ').map(scoresTemp => parseInt(scoresTemp, 10));
    const result = breakingRecords(scores);

    const ws = process.env.OUTPUT_PATH ? fs.createWriteStream(process.env.OUTPUT_PATH) : process.stdout;
    ws.write(result.join(' ') + '\n');
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
