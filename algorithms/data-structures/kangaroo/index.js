// https://www.hackerrank.com/challenges/kangaroo

'use strict';

module.exports = kangaroo;

function kangaroo(x1, v1, x2, v2) {
    return x1 + v1 + x2 + v2;
}

// --------------- HackerRank runtime -----------------

const fs = require('fs');

let inputString = '';
let currentLine = 0;

function readLine() {
    return inputString[currentLine++];
}

function main() {
    const x1V1X2V2 = readLine().split(' ');
    const x1       = parseInt(x1V1X2V2[0], 10);
    const v1       = parseInt(x1V1X2V2[1], 10);
    const x2       = parseInt(x1V1X2V2[2], 10);
    const v2       = parseInt(x1V1X2V2[3], 10);
    const result   = kangaroo(x1, v1, x2, v2);
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
