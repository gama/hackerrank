// https://www.hackerrank.com/challenges/REPLACE NAME

'use strict';

module.exports = dynamicArray;

function dynamicArray(n, queries) {
    const seqList = Array(n).fill().map(() => []);
    return queries.reduce((answers, [type, x, y]) => {
        const last = answers[answers.length - 1];
        const idx  = (x ^ last) % n;
        return (type === 1)
            ? (seqList[idx].push(y), answers)
            : answers.concat(seqList[idx][y % seqList[idx].length]);
    }, [0]).filter(Boolean);
}

// --------------- HackerRank runtime -----------------

const fs = require('fs');

let inputString = '';
let currentLine = 0;

function readLine() {
    return inputString[currentLine++];
}

function main() {
    const nq = readLine().replace(/\s+$/g, '').split(' ');
    const n  = parseInt(nq[0], 10);
    const q  = parseInt(nq[1], 10);

    const queries = Array(q).fill().map(() => (
        readLine().replace(/\s+$/g, '').split(' ').map(queriesTemp => parseInt(queriesTemp, 10))
    ));

    const result = dynamicArray(n, queries);

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
