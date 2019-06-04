function maximumElement(input) {
    const stack  = new Stack();
    input.split(/\r?\n+/).slice(1).forEach(line => {
        const [operationCode, argument] = line.split(' ');
        stack.operation(operationCode, argument);
    });
    return stack.printed();
}

class Stack {
    constructor() {
        this._elements = [];
        this._printed  = [];
        this._max      = -1;
    }

    operation(code, argument) {
        switch (Number(code)) {
            case 1:  return this.push(argument);
            case 2:  return this.pop();
            case 3:  return this.printMax();
            default: throw 'unknown operation';
        }
    }

    push(argument) {
        const element = Number(argument);
        if (this._max !== null && element > this._max)
            this._max = element;
        this._elements.push(element);
    }

    pop() {
        const element = this._elements.pop();
        if (element === this._max)
            this._max = null;
        return element;
    }

    printMax() {
        if (this._max === null)
            this._max = Math.max(...this._elements);
        this._printed.push(this._max);
    }

    printed() {
        return this._printed;
    }
}

module.exports = maximumElement;

// ----- Hackerrank runtime -----

function processData(input) {
    console.log(maximumElement(input).join("\n"));
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
