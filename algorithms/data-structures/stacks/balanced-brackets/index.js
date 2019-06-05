'use strict';

module.exports = isBalanced;

function isBalanced(str) {
    const brackets      = [];
    for (let char of [...str]) {
        if (OPEN_BRACKETS.includes(char)) {
            brackets.push(char);
        } else {
            const lastOpenBracket = brackets[brackets.length - 1];
            if (brackets.length === 0 || PAIRS[char] !== lastOpenBracket)
                return false;
            brackets.pop();
        }
    }
    return brackets.length === 0;
}

var PAIRS = {
    '}': '{',
    ']': '[',
    ')': '(',
}
var OPEN_BRACKETS = Object.values(PAIRS);

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
    const results = Array(Number(readLine())).fill().map(() => 
        isBalanced(readLine()) ? "YES" : "NO"
    );
    const ws = process.env.OUTPUT_PATH ? fs.createWriteStream(process.env.OUTPUT_PATH) : process.stdout;
    ws.write(results.join("\n"));
    ws.end("\n");
}
