// https://www.hackerrank.com/challenges/find-digits

'use strict';

module.exports = findDigits;

function findDigits(n) {
    return [...n.toString()].reduce((sum, digit) => {
        return sum + Number((n % digit) === 0);
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
    const t = parseInt(readLine(), 10);
    const result = Array(t).fill().map(() => findDigits(parseInt(readLine(), 10)));

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
