// https://www.hackerrank.com/challenges/happy-ladybugs/problem

'use strict';

module.exports = happyLadybugs;

function happyLadybugs(str) {
    if (allHappy(str)) {
        return true;
    }

    const map = [...str].reduce((counts, c) => {
        counts[c] = (counts[c] || 0) + 1; return counts;
    }, {});

    if (hasSingleLadybug(map)) {
        return false;
    }

    if (map['_'] === undefined) {
        return false;
    }

    return true;
}

function allHappy(str) {
    let chars = [...str];
    return chars.every((_, i) => {
        return (chars[i] === '_') ||
               (i > 0 && chars[i] == chars[i - 1]) ||
               (i <= (chars.length - 1) && chars[i] == chars[i + 1]);
    });
}

function hasSingleLadybug(countMap) {
    return Object.entries(countMap).some(([char, count]) => {
        return (char !== '_') && (count == 1);
    });
}


// --------------- HackerRank runtime -----------------

const fs = require('fs');

let inputString = '';
let currentLine = 0;

function readLine() {
    return inputString[currentLine++];
}

function main() {
    const t = parseInt(readLine(), 10);
    const result = Array(t).fill().map(() => {
        readLine();
        return happyLadybugs(readLine()) ? 'YES' : 'NO';
    });

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
