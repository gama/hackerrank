// https://www.hackerrank.com/challenges/climbing-the-leaderboard

'use strict';

module.exports = climbingLeaderboard;

function climbingLeaderboard(scores, aliceScores) {
    scores = Array.from(new Set(scores)).sort((a, b) => b - a);
    return aliceScores.map(score => {
        return findRank(scores, score) + 1;
    });
}

// use approximate-match binary search
function findRank(scores, score, lowerIdx = 0, upperIdx = (scores.length - 1)) {
    const halfIndex   = Math.floor((upperIdx + lowerIdx) / 2);
    const scoreAtHalf = scores[halfIndex];

    if (scoreAtHalf === score)
        return halfIndex;
    if (lowerIdx === upperIdx)
        return scoreAtHalf < score ? halfIndex : halfIndex + 1;
    if (scoreAtHalf < score)
        return findRank(scores, score, lowerIdx, halfIndex);
    if (scoreAtHalf > score)
        return findRank(scores, score, halfIndex + 1, upperIdx);
}

// --------------- HackerRank runtime -----------------

const fs = require('fs');

let inputString = '';
let currentLine = 0;

function readLine() {
    return inputString[currentLine++];
}

function main() {
    const scoresCount = parseInt(readLine(), 10);  // eslint-disable-line no-unused-vars
    const scores = readLine().split(' ').map(scoresTemp => parseInt(scoresTemp, 10));
    const aliceCount = parseInt(readLine(), 10);  // eslint-disable-line no-unused-vars
    const alice = readLine().split(' ').map(aliceTemp => parseInt(aliceTemp, 10));

    let result = climbingLeaderboard(scores, alice);

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
