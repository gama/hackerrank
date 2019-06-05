'use strict';

module.exports = equalStacks;

function equalStacks(stacks) {
    const sums = stacks.map(stack => 
        stack.reduce((sum, el) => sum + el, 0)
    );

    while (true) {
        if (allEqual(sums))
            return sums[0];

        const maxIdx  = indexOfMaxValue(sums);
        sums[maxIdx] -= stacks[maxIdx].shift();
        if (sums[maxIdx] === 0)
            return 0;
    }
}

function allEqual(arr) {
    return arr.lenght === 0 || arr.every(el => el === arr[0]);
}

function indexOfMaxValue(arr) {
    return arr.reduce((iMax, x, i) => x > arr[iMax] ? i : iMax, 0);
}

// ------ Hackerrank runtime ------

const fs = require('fs');

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
    readLine();  // ignore n1, n2 and n3

    const stacks = [readLine(), readLine(), readLine()].map(line => (
        line.split(' ').map(x => Number(x))
    ));
    const result = equalStacks(stacks);

    const ws = process.env.OUTPUT_PATH ? fs.createWriteStream(process.env.OUTPUT_PATH) : process.stdout;
    ws.write(result + "\n");
    ws.end();
}
