// https://www.hackerrank.com/challenges/electronics-shop

'use strict';

module.exports = getMoneySpent;

function getMoneySpent(keyboards, drives, budget) {
    let maxPrice = -1;
    for (let keyboard of keyboards.sort((a, b) => b - a)) {
        for (let drive of drives.sort((a, b) => b - a)) {
            const combinedPrice = keyboard + drive;
            if (maxPrice < combinedPrice && combinedPrice <= budget) {
                maxPrice = combinedPrice;
                break;
            }
        }
    }
    return maxPrice;
}

// --------------- HackerRank runtime -----------------

const fs = require('fs');

let inputString = '';
let currentLine = 0;

function readLine() {
    return inputString[currentLine++];
}

function main() {
    const bnm = readLine().split(' ');
    const b = parseInt(bnm[0], 10);
    const n = parseInt(bnm[1], 10);  // eslint-disable-line no-unused-vars
    const m = parseInt(bnm[2], 10);  // eslint-disable-line no-unused-vars
    const keyboards = readLine().split(' ').map(keyboardsTemp => parseInt(keyboardsTemp, 10));
    const drives = readLine().split(' ').map(drivesTemp => parseInt(drivesTemp, 10));

    // The maximum amount of money she can spend on a keyboard and USB drive, or -1 if she can't purchase both items
    let result = getMoneySpent(keyboards, drives, b);

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
