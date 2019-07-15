'use strict';

module.exports = minimumMoves;

function minimumMoves(grid, startRow, startCol, goalRow, goalCol) {
    const path = AStar([startRow, startCol], [goalRow, goalCol], grid);
    return path.length - 1;
}

// adapted from https://en.wikipedia.org/wiki/A*_search_algorithm
function AStar(start, goal, grid) {
    let openSet  = new Set([ start.toString() ]);
    let cameFrom = {};
    let gScore   = HashWithDefault({ [start]: 0 }, Number.MAX_SAFE_INTEGER);
    let fScore   = HashWithDefault({ [start]: heuristicFunc(start, goal) }, Number.MAX_SAFE_INTEGER);

    let findMinFScore = () => {
        return Object.keys(fScore).reduce(([minPoint, minScore], point) => {
            return openSet.has(point) && fScore[point] < minScore ? [point, fScore[point]] : [minPoint, minScore];
        }, [null, Number.MAX_SAFE_INTEGER])[0];
    };

    while (openSet.size) {
        let current = findMinFScore();
        if (current == goal)
            return reconstructPath(cameFrom, current);
        openSet.delete(current.toString());

        neighbors(current, grid).forEach(neighbor => {
            let tentativeGScore = gScore[current] + 1;
            if (tentativeGScore < gScore[neighbor]) {
                // record new best path
                cameFrom[neighbor] = current;
                gScore[neighbor]   = tentativeGScore;
                fScore[neighbor]   = gScore[neighbor] + heuristicFunc(neighbor, goal);
                if (!openSet.has(neighbor.toString()))
                    openSet.add(neighbor.toString());
            }
        });
    }
    throw `unable to reach goal point ${goal} from start point ${start}`;
}

function HashWithDefault(initial = {}, defaultValue = undefined) {
    return new Proxy(initial, {
        get: function(target, name) {
            return target.hasOwnProperty(name) ? target[name] : defaultValue;
        }
    });
}

function heuristicFunc(point, goal) {
    return Number(Boolean(point[0] - goal[0])) + Number(Boolean(point[1] - goal[1]));
}

function neighbors(point, grid) {
    let neighbors = [];
    point = point.split(',').map(Number);
    for (let col = point[1] + 1; col < grid.length && grid[point[0]][col] != 'X'; ++col)
        neighbors.push([point[0], col]);
    for (let col = point[1] - 1; col >= 0 && grid[point[0]][col] != 'X'; --col)
        neighbors.push([point[0], col]);
    for (let row = point[0] + 1; row < grid.length && grid[row][point[1]] != 'X'; ++row)
        neighbors.push([row, point[1]]);
    for (let row = point[0] - 1; row >= 0 && grid[row][point[1]] != 'X'; --row)
        neighbors.push([row, point[1]]);
    return neighbors;
}

function reconstructPath(cameFrom, current) {
    const totalPath = [ current ];
    while (current in cameFrom) {
        current = cameFrom[current];
        totalPath.push(current);
    }
    return totalPath.reverse();
}

function main() {
    const n      = Number(readLine());
    const grid   = Array(n).fill().map(_ => [...readLine()]);
    const coords = readLine().split(' ').map(Number);
    const result = minimumMoves(grid, ...coords);

    const ws = process.env.OUTPUT_PATH ? fs.createWriteStream(process.env.OUTPUT_PATH) : process.stdout;
    ws.write(result + '\n');
    ws.end();
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

process.stdin.on('end', function() {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));
    main();
});

function readLine() {
    return inputString[currentLine++];
}
