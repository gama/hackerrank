'use strict';

module.exports = twoStacks;

function twoStacks(limit, stackA, stackB) {
    let sum = 0, sumStackA = [], sumStackB = [];
    for (let element of stackA) {
        if ((sum + element) > limit)
            break;

        sumStackA.push(element);
        sum += element;
    }

    let max = sumStackA.length;

    stackBLoop:
    for (let element of stackB) {
        while ((sum + element) > limit) {
            const removedElement = sumStackA.pop();
            if (removedElement === undefined) // no more elements to remove
                break stackBLoop;
            sum -= removedElement;
        }

        sum += element;
        sumStackB.push(element);

        max = Math.max(max, sumStackA.length + sumStackB.length);
    }

    return max;
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
    const numGames = Number(readLine());
    const results  = Array(numGames).fill().map(() => {
        const [limit] = readLine().split(' ').slice(-1).map(Number)
        const stackA  = readLine().split(' ').map(Number);
        const stackB  = readLine().split(' ').map(Number);
        return twoStacks(limit, stackA, stackB);
    });

    const ws = process.env.OUTPUT_PATH ? fs.createWriteStream(process.env.OUTPUT_PATH) : process.stdout;
    ws.write(results.join('\n'));
    ws.end();
}
