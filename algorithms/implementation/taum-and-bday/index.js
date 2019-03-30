// https://www.hackerrank.com/challenges/taum-and-bday

'use strict';

module.exports = taumBday;

function taumBday(numBlacks, numWhites, blackCost, whiteCost, changeCost) {
    return (
        BigInt(numBlacks) * BigInt(Math.min(blackCost, whiteCost + changeCost)) +
        BigInt(numWhites) * BigInt(Math.min(whiteCost, blackCost + changeCost))
    );
}

// --------------- HackerRank runtime -----------------

const fs = require('fs');

let inputString = '';
let currentLine = 0;

function readLine() {
    return inputString[currentLine++];
}

function main() {
    const nTests = parseInt(readLine(), 10);
    const result = Array(nTests).fill().map(() => {
        const [b, w]      = readLine().split(' ').map(x => parseInt(x, 10));
        const [bc, wc, z] = readLine().split(' ').map(x => parseInt(x, 10));
        return taumBday(b, w, bc, wc, z);
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
