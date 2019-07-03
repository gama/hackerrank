'use strict';

module.exports = processQueries;

const fs = require('fs');

class Stack {
    constructor() { this._stack = []; }
    peek()        { return this._stack[this._stack.length - 1]; }
    pop()         { return this._stack.pop(); }
    push(i)       { return this._stack.push(i); }
    empty()       { return this._stack.length === 0; }
}

class Queue {
    constructor() {
        this._enqueueStack = new Stack();
        this._dequeueStack = new Stack();
        this.output        = [];
    }

    operation(code, ...args) {
        if (code === 1) return this.enqueue(...args);
        if (code === 2) return this.dequeue();
        if (code === 3) return this.print();
        throw 'unknown operation code: ' + code;
    }

    enqueue(value) {
        this._enqueueStack.push(value);
    }

    dequeue() {
        if (this._dequeueStack.empty())
            this._flushInputStack();
        return this._dequeueStack.pop();
    }

    peek() {
        if (this._dequeueStack.empty())
            this._flushInputStack();
        return this._dequeueStack.peek();
    }

    print() {
        this.output.push(this.peek());
    }

    _flushInputStack() {
        if (!this._dequeueStack.empty())
            throw 'flushing with non-empty dequeue stack';

        while (!this._enqueueStack.empty())
            this._dequeueStack.push(this._enqueueStack.pop());
    }
}

function processQueries(queries) {
    const queue = new Queue();
    queries.forEach(query => queue.operation(...query));
    return queue.output;
}

function processData(input) {
    const lines   = input.split('\n').filter(line => line.length);
    const queries = lines.slice(1).map(line => line.split(' ').map(Number));
    const result  = processQueries(queries);

    const ws = process.env.OUTPUT_PATH ? fs.createWriteStream(process.env.OUTPUT_PATH) : process.stdout;
    ws.write(result.join('\n') + '\n');
    ws.end();
}

// ------ Hackerrank runtime ------

process.stdin.resume();
process.stdin.setEncoding('ascii');
let _input = '';
process.stdin.on('data', function (input) {
    _input += input;
});

process.stdin.on('end', function () {
    processData(_input);
});
