'use strict';

module.exports = simpleEditor;

class Editor {
    constructor() {
        this.undoStack = [];
        this.content   = [];
        this.output    = [];
    }

    operation(code, arg, undoable=true) {
        switch (Number(code)) {
            case 1: return this.add(arg, undoable);
            case 2: return this.delete(arg, undoable);
            case 3: return this.print(arg);
            case 4: return this.undo();
        }
    }

    add(arg, undoable) {
        this.content.push(...arg);
        if (undoable)
            this.undoStack.push([2, arg.length]);
    }

    delete(arg, undoable) {
        const deletedChars = this.content.splice(-Number(arg));
        if (undoable)
            this.undoStack.push([1, deletedChars]);
    }

    print(arg) {
        this.output.push(this.content[Number(arg) - 1], '\n');
    }

    undo() {
        this.operation(...[...this.undoStack.pop(), false]);
    }
}

function simpleEditor(input) {
    const editor = new Editor();
    input.split('\n').forEach(line => {
        editor.operation(...(line.split(' ')));
    });
    return editor.output.join('');
}

// ------ Hackerrank runtime ------

const fs = require('fs');

function processData(input) {
    const result = simpleEditor(input);
    const ws = process.env.OUTPUT_PATH ? fs.createWriteStream(process.env.OUTPUT_PATH) : process.stdout;
    ws.write(result);
    ws.end();
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
let _input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
