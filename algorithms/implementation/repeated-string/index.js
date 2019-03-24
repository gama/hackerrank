// https://www.hackerrank.com/challenges/repeated-string

'use strict';

module.exports = repeatedString;

function repeatedString(str, n) {
    const substr     = str.substring(0, n % str.length);
    const countCharA = (s) => [...s].reduce((sum, char) => sum + Number(char === 'a'), 0);
    return (Math.floor((n / str.length)) * countCharA(str)) + countCharA(substr);
}

// --------------- HackerRank runtime -----------------

const fs = require('fs');

let inputString = '';
let currentLine = 0;

function readLine() {
    return inputString[currentLine++];
}

function main() {
    const s = readLine();
    const n = parseInt(readLine(), 10);
    const result = repeatedString(s, n);

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
