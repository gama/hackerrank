// https://www.hackerrank.com/challenges/acm-icpc-team

'use strict';

module.exports = acmTeam;

// excessively verbose implementation using a BitArray class (for
// self learning purposes)
function acmTeam(topicsStrs) {
    const topicsBitArrays = topicsStrs.map(x => BitArray(x));

    let max = { numTopics: 0, numPairs: 0 };
    for (let i = 0; i < topicsBitArrays.length; ++i)
        for (let j = (i + 1); j < topicsBitArrays.length; ++j) {
            const numTopics = topicsBitArrays[i].or(topicsBitArrays[j]).numOnes();
            if (numTopics > max.numTopics)
                max = { numTopics: numTopics, numPairs: 1 };
            else if (numTopics === max.numTopics)
                max.numPairs++;
        }

    return [ max.numTopics, max.numPairs ];
}

function BitArray(string, IntArrType = Uint32Array) {
    const bits   = 8 * IntArrType.BYTES_PER_ELEMENT;
    const intArr = new IntArrType(Math.ceil(string.length / bits));

    const regexp = new RegExp(`[01]{0,${bits}}`, 'g');
    string.match(regexp).filter(Boolean).forEach((str, idx) => {
        intArr[idx] = parseInt(str.padEnd(bits, '0'), 2);
    });

    intArr.numBits = string.length;
    intArr.getBit  = (idx) => Number(Boolean(intArr[Math.floor(idx / bits)] & (1 << (bits - 1 -(idx % bits)))));
    intArr.and     = (other) => intArr.reduce((out, _, i) => (out[i] = intArr[i] & other[i], out), BitArray(string));
    intArr.or      = (other) => intArr.reduce((out, _, i) => (out[i] = intArr[i] | other[i], out), BitArray(string));
    intArr.numOnes = () => {
        let sum = 0;
        for (let i = 0; i < intArr.numBits; ++i)
            sum += Number(intArr.getBit(i));
        return sum;
    };

    return intArr;
}

// --------------- HackerRank runtime -----------------

const fs = require('fs');

let inputString = '';
let currentLine = 0;

function readLine() {
    return inputString[currentLine++];
}

function main() {
    const nm    = readLine().split(' ');
    const n     = parseInt(nm[0], 10);
    const m     = parseInt(nm[1], 10);   // eslint-disable-line no-unused-vars
    const topic = Array(n).fill().map(() => readLine());

    const result = acmTeam(topic);

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
