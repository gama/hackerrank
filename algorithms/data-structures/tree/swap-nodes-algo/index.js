// https://www.hackerrank.com/challenges/swap-nodes-algo

'use strict';

module.exports = swapNodes;

function swapNodes(indexes, queries) {
    const tree = Tree.fromIndexes(indexes);
    return queries.map(query => (tree.swap(query), tree.inOrderTraversal()));
}

class Node {
    constructor(data, left, right) {
        this.data  = data;
        this.left  = left;
        this.right = right;
    }
}

class Tree {
    constructor(nodes) {
        this.nodes = nodes;
        this.root  = nodes[0];
    }

    static fromIndexes(indexes) {
        const nodes = indexes.map(([left, right], idx) => new Node(idx + 1, left, right));
        return new Tree(nodes);
    }

    left(node) {
        return (node.left > 0) ? this.nodes[node.left - 1] : null;
    }

    right(node) {
        return (node.right > 0) ? this.nodes[node.right - 1] : null;
    }

    inOrderTraversal(node = this.root, values = []) {
        if (!node)
            return [];
        return [
            ...this.inOrderTraversal(this.left(node), values),
            node.data,
            ...this.inOrderTraversal(this.right(node), values)
        ];
    }

    swap(depth, node = this.root, currDepth = 1) {
        if (!node)
            return;
        this.swap(depth, this.left(node),  currDepth + 1);
        this.swap(depth, this.right(node), currDepth + 1);
        if ((currDepth % depth) == 0)
            [node.right, node.left] = [node.left, node.right];
    }
}


// --------------- HackerRank runtime -----------------

const fs = require('fs');

let inputString = '';
let currentLine = 0;

function readLine() {
    return inputString[currentLine++];
}

function main() {
    const indexes = Array(Number(readLine())).fill().map(() => (
        readLine().split(' ').map(i => Number(i))
    ));
    const queries = Array(Number(readLine())).fill().map(() => (
        Number(readLine())
    ));

    const result = swapNodes(indexes, queries);

    const ws = process.env.OUTPUT_PATH ? fs.createWriteStream(process.env.OUTPUT_PATH) : process.stdout;
    ws.write(result.map(i => i.join(' ')).join('\n') + '\n');
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
