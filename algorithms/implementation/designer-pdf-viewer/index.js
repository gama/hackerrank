// https://www.hackerrank.com/challenges/designer-pdf-viewer

'use strict';

module.exports = designerPdfViewer;

const OFFSET_CCODE= 'a'.charCodeAt();

function designerPdfViewer(alphabetHeights, word) {
    const charHeights = [...word].map(char => alphabetHeights[char.charCodeAt() - OFFSET_CCODE]);
    const maxHeight   = Math.max.apply(null, charHeights);
    return maxHeight * word.length;
}

// --------------- HackerRank runtime -----------------

const fs = require('fs');

let inputString = '';
let currentLine = 0;

function readLine() {
    return inputString[currentLine++];
}

function main() {
    const h    = readLine().split(' ').map(hTemp => parseInt(hTemp, 10));
    const word = readLine();
    let result = designerPdfViewer(h, word);

    const ws = process.env.OUTPUT_PATH ? fs.createWriteStream(process.env.OUTPUT_PATH) : process.stdout;
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
