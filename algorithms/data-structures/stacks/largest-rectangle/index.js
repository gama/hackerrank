'use strict';

module.exports = largestRectangle;

class HeightStack {
    constructor() { this._stack = []; }
    peekHeight()  { return this._stack[this._stack.length - 1].height; }
    pop()         { const e = this._stack.pop(); return [e.height, e.index]; }
    push(h, i)    { return this._stack.push({height:h, index:i}); }
    empty()       { return this._stack.length === 0; }
}

function largestRectangle(heights) {
    const heightStack = new HeightStack();
    let   maxArea     = 0;

    [...heights, 0].forEach((height, index) => {
        let largerHeight, largerHeightIndex;
        while (!heightStack.empty() && height < heightStack.peekHeight()) {
            [largerHeight, largerHeightIndex] = heightStack.pop();
            maxArea = Math.max(maxArea, largerHeight * (index - largerHeightIndex));
        }
        heightStack.push(height, largerHeightIndex == null ? index : largerHeightIndex);
    });

    return maxArea;
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
    readLine();  // skip first line
    const heights = readLine().split(' ').map(Number);

    let result = largestRectangle(heights);

    const ws = process.env.OUTPUT_PATH ? fs.createWriteStream(process.env.OUTPUT_PATH) : process.stdout;
    ws.write(result + '\n');
    ws.end();
}
