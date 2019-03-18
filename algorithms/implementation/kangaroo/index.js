// https://www.hackerrank.com/challenges/kangaroo

'use strict';

module.exports = kangaroo;

// solving "x1 + v1*t = x1 + v2*t" for t, we get "t = (x1 - x2)/(v2 - v1)"
function kangaroo(x1, v1, x2, v2) {
    const time = (x1 - x2) / (v2 - v1);
    return (time >= 0 && Math.floor(time) === time) ? 'YES' : 'NO';
}

// --------------- HackerRank runtime -----------------

const fs = require('fs');

let inputString = '';
let currentLine = 0;

function readLine() {
    return inputString[currentLine++];
}

function main() {
    const x1v1x2v2 = readLine().split(' ');
    const x1       = parseInt(x1v1x2v2[0], 10);
    const v1       = parseInt(x1v1x2v2[1], 10);
    const x2       = parseInt(x1v1x2v2[2], 10);
    const v2       = parseInt(x1v1x2v2[3], 10);
    const result   = kangaroo(x1, v1, x2, v2);
    const ws       = process.env.OUTPUT_PATH ? fs.createWriteStream(process.env.OUTPUT_PATH) : process.stdout;
    ws.end(result + '\n');
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
