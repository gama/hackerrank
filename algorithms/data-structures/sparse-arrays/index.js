// https://www.hackerrank.com/challenges/sparse-arrays

'use strict';

module.exports = matchingStrings;

function matchingStrings(strings, queries) {
    const stringCounts = strings.reduce((hash, string) => (
        (hash[string] = (hash[string] || 0) + 1, hash)
    ), {});

    return queries.map(query => (stringCounts[query] || 0));
}

// eslint-disable-next-line no-unused-vars
function matchingStringsNestedLoops(strings, queries) {
    return queries.map(query => (
        strings.reduce((sum, string) => sum + Number(string === query), 0)
    ));
}

// --------------- HackerRank runtime -----------------

const fs = require('fs');

let inputString = '';
let currentLine = 0;

function readLine() {
    return inputString[currentLine++];
}

function main() {
    const nStrings = parseInt(readLine(), 10);
    const strings  = Array(nStrings).fill().map(() => readLine());
    const nQueries = parseInt(readLine(), 10);
    const queries  = Array(nQueries).fill().map(() => readLine());

    const result = matchingStrings(strings, queries);

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
