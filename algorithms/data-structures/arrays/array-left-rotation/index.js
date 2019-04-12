// https://www.hackerrank.com/challenges/array-left-rotation

'use strict';

module.exports = rotateArray;

// standard inline implementation
function rotateArray(arr, d) {
    d = d % arr.length;
    for (let i=0, org=0, dst, tmp=arr[org]; i < arr.length; i++, org=dst) {
        dst = (org - d + arr.length) % arr.length;
        [tmp, arr[dst]] = [arr[dst], tmp];
    }

    return arr;
}

// Array's slice implementation
function rotateArrayWithSlice(arr, d) {  // eslint-disable-line no-unused-vars
    d = d % arr.length;
    return arr.slice(d).concat(arr.slice(0, d));
}

// --------------- HackerRank runtime -----------------

const fs = require('fs');

let inputString = '';
let currentLine = 0;

function readLine() {
    return inputString[currentLine++];
}

function main() {
    const nd   = readLine().split(' ');
    // const n = parseInt(nd[0], 10);
    const d    = parseInt(nd[1], 10);
    const arr  = readLine().split(' ').map(aTemp => parseInt(aTemp, 10));

    const result = rotateArray(arr, d);
    
    const ws = process.env.OUTPUT_PATH ? fs.createWriteStream(process.env.OUTPUT_PATH) : process.stdout;
    ws.write(result.join(' ') + '\n');
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
