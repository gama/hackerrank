// https://www.hackerrank.com/challenges/utopian-tree

'use strict';

module.exports = utopianTree;

function utopianTree(n) {
    const p = Math.floor((n - 1) / 2);
    return 2 ** (p + 2) - 1 - (n % 2);
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
    const result = Array(t).fill().map(() => utopianTree(parseInt(readLine(), 10)));

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
