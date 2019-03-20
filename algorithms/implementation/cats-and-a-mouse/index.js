// https://www.hackerrank.com/challenges/cats-and-a-mouse

'use strict';

module.exports = catAndMouse;

function catAndMouse(catA, catB, mouse) {
    const distanceA = Math.abs(catA - mouse);
    const distanceB = Math.abs(catB - mouse);
    if (distanceA < distanceB)
        return 'Cat A';
    if (distanceB < distanceA)
        return 'Cat B';
    return 'Mouse C';
}

// --------------- HackerRank runtime -----------------

const fs = require('fs');

let inputString = '';
let currentLine = 0;

function readLine() {
    return inputString[currentLine++];
}

function main() {
    const ws = process.env.OUTPUT_PATH ? fs.createWriteStream(process.env.OUTPUT_PATH) : process.stdout;

    const q = parseInt(readLine(), 10);
    for (let qItr = 0; qItr < q; qItr++) {
        const xyz = readLine().split(' ');
        const x = parseInt(xyz[0], 10);
        const y = parseInt(xyz[1], 10);
        const z = parseInt(xyz[2], 10);
        let result = catAndMouse(x, y, z);
        ws.write(result + '\n');
    }
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
