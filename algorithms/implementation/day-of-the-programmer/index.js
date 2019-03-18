// https://www.hackerrank.com/challenges/time-conversion

'use strict';

module.exports = dayOfProgrammer;

const daysInJanMarAprMayJunJulAug = 31 + 31 + 30 + 31 + 30 + 31 + 31;

function dayOfProgrammer(year) {
    const dayOfMonth = 256 - (daysInJanMarAprMayJunJulAug + daysInFebruary(year));
    return dayOfMonth.toString().padStart(2, '0') + '.09.' + year.toString();
}

function daysInFebruary(year) {
    if (year === 1918) return 15;
    if (isLeapYear(year)) return 29;
    return 28;
}

function isLeapYear(year) {
    return (year < 1918) ? isJulianLeapYear(year) : isGregorianLeapYear(year);
}

function isJulianLeapYear(year) {
    return (year % 4) == 0;
}

function isGregorianLeapYear(year) {
    return (
        ((year % 400) == 0) ||
        (((year % 4) == 0) && !((year % 100) == 0))
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
    const year = parseInt(readLine().trim(), 10);
    const result = dayOfProgrammer(year);

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
