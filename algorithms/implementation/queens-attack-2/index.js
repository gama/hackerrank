// https://www.hackerrank.com/challenges/queens-attach-2

'use strict';

module.exports = queensAttack;

function queensAttack(boardSize, qRow, qCol, obstacles = []) {
    // add "virtual" obstacles that define the board's borders
    const ob = boardSize + 1;
    obstacles.push(
        [0,    qCol], [ob,   qCol], [qRow, 0], [qRow, ob],
        [ob, ob  - (qRow - qCol)], [ob + (qRow - qCol),  ob],
        [0,  0   - (qRow - qCol)], [0  + (qRow - qCol),  0 ],
        [ob, -ob + (qRow + qCol)], [-ob + (qRow + qCol), ob],
        [0,  -0  + (qRow + qCol)], [-0  + (qRow + qCol), 0 ],
    ); 

    const distQueen   = (obst) => Math.max(Math.abs(obst[0] - qRow), Math.abs(obst[1] - qCol)) - 1;
    const byDistQueen = (a, b) => (distQueen(a) - distQueen(b));

    const upObst        = obstacles.filter((o) => o[1] === qCol && o[0] > qRow).sort(byDistQueen)[0];
    const downObst      = obstacles.filter((o) => o[1] === qCol && o[0] < qRow).sort(byDistQueen)[0];
    const rightObst     = obstacles.filter((o) => o[0] === qRow && o[1] > qCol).sort(byDistQueen)[0];
    const leftObst      = obstacles.filter((o) => o[0] === qRow && o[1] < qCol).sort(byDistQueen)[0];
    const upRightObst   = obstacles.filter((o) => o[0] - o[1] === qRow - qCol && o[0] > qRow).sort(byDistQueen)[0];
    const downLeftObst  = obstacles.filter((o) => o[0] - o[1] === qRow - qCol && o[0] < qRow).sort(byDistQueen)[0];
    const upLeftObst    = obstacles.filter((o) => o[0] + o[1] === qRow + qCol && o[0] > qRow).sort(byDistQueen)[0];
    const downRightObst = obstacles.filter((o) => o[0] + o[1] === qRow + qCol && o[0] < qRow).sort(byDistQueen)[0];

    return distQueen(upObst) + distQueen(downObst) + distQueen(leftObst) + distQueen(rightObst) +
        distQueen(upRightObst) + distQueen(downLeftObst) + distQueen(upLeftObst) + distQueen(downRightObst);
}

// --------------- HackerRank runtime -----------------

const fs = require('fs');

let inputString = '';
let currentLine = 0;

function readLine() {
    return inputString[currentLine++];
}

function main() {
    const nk     = readLine().split(' ');
    const n      = parseInt(nk[0], 10);
    const k      = parseInt(nk[1], 10);  // eslint-disable-line no-unused-vars
    const r_qC_q = readLine().split(' ');
    const r_q    = parseInt(r_qC_q[0], 10);
    const c_q    = parseInt(r_qC_q[1], 10);

    let obstacles = Array(k);
    for (let i = 0; i < k; i++)
        obstacles[i] = readLine().split(' ').map(obstaclesTemp => parseInt(obstaclesTemp, 10));

    const result = queensAttack(n, r_q, c_q, obstacles);

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
