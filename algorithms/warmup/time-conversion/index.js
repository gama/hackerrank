// https://www.hackerrank.com/challenges/time-conversion

'use strict';

module.exports = timeConversion;

function timeConversion(str) {
    const hour = str.slice(0, 2);
    const ampm = str.slice(-2);
    return convertHour(hour, ampm) + str.slice(2, -2);
}

function convertHour(hour, ampm) {
    const offset    = (ampm === 'AM') ? 0 : 12;
    const converted = (parseInt(hour) % 12) + offset;
    return converted.toString().padStart(2, '0');
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
    const s  = readLine();
    const result = timeConversion(s);
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
