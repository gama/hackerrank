// https://www.hackerrank.com/challenges/angry-professor

'use strict';

module.exports = angryProfessor;

function angryProfessor(minStudents, arrivalTimes) {
    const numOnTime = arrivalTimes.reduce((sum, time) => sum + Number(time <= 0), 0);
    return numOnTime < minStudents ? 'YES' : 'NO';
}

// --------------- HackerRank runtime -----------------

const fs = require('fs');

let inputString = '';
let currentLine = 0;

function readLine() {
    return inputString[currentLine++];
}

function main() {
    const t = parseInt(readLine(), 10);
    const result = Array(t).fill().map(() => {
        const nk   = readLine().split(' ');
        // const n = parseInt(nk[0], 10);
        const k    = parseInt(nk[1], 10);
        const a    = readLine().split(' ').map(aTemp => parseInt(aTemp, 10));
        return angryProfessor(k, a);
    });

    const ws = process.env.OUTPUT_PATH ? fs.createWriteStream(process.env.OUTPUT_PATH) : process.stdout;
    ws.write(result.join('\n') + '\n');
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
