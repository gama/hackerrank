// https://www.hackerrank.com/challenges/counting-valleys

'use strict';

module.exports = countingValleys;

const STEP_VALUE= {U: 1, D: -1};

function countingValleys(path) {
    const steps = [...path].map(s => STEP_VALUE[s]);
    return steps.reduce(([currHeight, numValleys], step) => {
        if (currHeight === -1 && step === 1)
            numValleys += 1;
        currHeight += step;
        return [currHeight, numValleys];
    }, [0, 0])[1];
}

// --------------- HackerRank runtime -----------------

const fs = require('fs');

let inputString = '';
let currentLine = 0;

function readLine() {
    return inputString[currentLine++];
}

function main() {
    const n    = parseInt(readLine(), 10);
    const s    = readLine();
    let result = countingValleys(n, s);

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
