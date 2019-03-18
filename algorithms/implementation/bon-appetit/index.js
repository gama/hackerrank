// https://www.hackerrank.com/challenges/bon-appetit

'use strict';

module.exports = bonAppetit;

function bonAppetit(billItems, allergicItemIndex, annaPayment) {
    const billTotal = billItems.reduce((sum, item) => sum + item, 0);
    const annaShare = (billTotal - billItems[allergicItemIndex]) / 2; 
    return (annaPayment == annaShare) ? 'Bon Appetit' : (annaPayment - annaShare);
}

// --------------- HackerRank runtime -----------------

const fs = require('fs');

let inputString = '';
let currentLine = 0;

function readLine() {
    return inputString[currentLine++];
}

function main() {
    const nk   = readLine().replace(/\s+$/g, '').split(' ');
    // const n = parseInt(nk[0], 10);
    const k    = parseInt(nk[1], 10);
    const bill = readLine().replace(/\s+$/g, '').split(' ').map(billTemp => parseInt(billTemp, 10));
    const b    = parseInt(readLine().trim(), 10);

    const result = bonAppetit(bill, k, b);
    const ws     = process.env.OUTPUT_PATH ? fs.createWriteStream(process.env.OUTPUT_PATH) : process.stdout;
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
