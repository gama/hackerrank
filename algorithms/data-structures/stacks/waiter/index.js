'use strict';

module.exports = {waiter, computePrimes};

function waiter(inputPile, nIterations) {
    const outputPiles = Array(nIterations).fill().map(_ => []);
    const primes      = computePrimes(nIterations);

    Array(nIterations).fill().forEach((_, i) => {
        const nextInputPile = [];
        do {
            const plate = inputPile.pop();
            const pile  = (plate % primes[i] === 0) ? outputPiles[i]: nextInputPile;
            pile.push(plate);
        } while (inputPile.length);
        inputPile = nextInputPile;
    });

    return [...outputPiles, inputPile].reduce((output, pile) => {
        while (pile.length)
            output.push(pile.pop());
        return output;
    }, []);
}

function computePrimes(nPrimes) {
    const primes = [];
    prime:
    for (let i = 2; primes.length <= nPrimes; ++i) {
        for (let j = 2; j <= Math.sqrt(i); j++)
            if (i % j === 0)
                continue prime;
        primes.push(i);
    }
    return primes;
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
    const [, q]  = readLine().split(' ').map(Number);
    const plates = readLine().split(' ').map(Number);
    const result = waiter(plates, q);

    const ws = process.env.OUTPUT_PATH ? fs.createWriteStream(process.env.OUTPUT_PATH) : process.stdout;
    ws.write(result.join("\n") + "\n");
    ws.end();
}
