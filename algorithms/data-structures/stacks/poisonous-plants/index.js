'use strict';

module.exports = poisonousPlants;

const fs = require('fs');

Array.prototype.peek = function() {
    return this.length > 0 ? this[this.length - 1] : undefined;
};

function poisonousPlants(plants) {
    let prev;
    [prev, ...plants] = plants;
    let stack  = [{value: prev, day: 0}]; 
    let maxDay = 0;

    plants.forEach((curr) => {
        if (curr <= stack[0].value) {
            // reset with new min
            stack = [{value: curr, day: 0}];
            return;
        }

        let currDay = 1;
        while (stack.peek().value >= curr)
            currDay = stack.pop().day + 1;
        while (stack.peek().day == currDay)
            stack.pop();

        stack.push({ value: curr, day: currDay});
        maxDay = Math.max(maxDay, currDay);
    });

    return maxDay;
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
    const result = poisonousPlants(plants);

    const ws = process.env.OUTPUT_PATH ? fs.createWriteStream(process.env.OUTPUT_PATH) : process.stdout;
    ws.write(result + '\n');
    ws.end();
}
