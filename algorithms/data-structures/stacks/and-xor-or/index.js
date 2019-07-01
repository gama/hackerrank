'use strict';

module.exports = andXorOr;

const fs = require('fs');

function andXorOr(input) {
    const stack = [];
    const peek  = arr => arr[arr.length - 1];
    const S     = (m1, m2) => m1 ^ m2;  // simpl. of (((m1 & m2) ^ (m1 | m2)) & (m1 ^ m2))
    let   maxS  = -1;

    input.forEach(a => {
        while (a < peek(stack))
            maxS = Math.max(maxS, S(a, stack.pop()));
        if (stack.length)
            maxS = Math.max(maxS, S(a, peek(stack)));
        stack.push(a);
    });

    return maxS;
}

// ------ Hackerrank runtime ------

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));
    main();
});

function readLine() {
    return inputString[currentLine++];
}

function main() {
    readLine();
    const plants = readLine().split(' ').map(Number);
    const result = andXorOr(plants);

    const ws = process.env.OUTPUT_PATH ? fs.createWriteStream(process.env.OUTPUT_PATH) : process.stdout;
    ws.write(result + '\n');
    ws.end();
}
