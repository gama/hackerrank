function squareTenTree(left, right) {
    left  = new Bigint('1').subtractFrom(new Bigint(left));
    right = new Bigint(right);
    Bigint.chopCommonPrefix(left, right);

    diffPoint = Bigint.calcDiffPoint(left, right);
    leftDiff  = left.subtractFrom(diffPoint);
    rightDiff = diffPoint.subtractFrom(right);
    return printTree(leftDiff, rightDiff);
}

const ZERO_CHAR_CODE = '0'.charCodeAt(0);

class Bigint {
    constructor(strOrArr) {
        if (typeof strOrArr === 'string') {
            this.str = new Uint8Array(strOrArr.length); 
            for (let i = 0; i < strOrArr.length; ++i)
                this.str[i] = strOrArr.charCodeAt(i) - ZERO_CHAR_CODE;
        } else
            this.str = strOrArr;

        this._stripLeadingZeros()
    }

    _stripLeadingZeros() {
        const firstNonZero = this.str.findIndex(e => e !== 0);
        if (firstNonZero > 0)
            this.str = this.str.slice(firstNonZero);
    }

    get length() {
        return this.str.length;
    }

    slice(lowerIdx, upperIdx) {
        debugger
        return new Bigint(this.str.slice(lowerIdx, upperIdx))
    }

    treeLevel() {
        return Math.ceil(Math.log2(this.length));
    }

    addTo(other) {
        const zeroCharCode = 0;
        let [strLarge, strSmall] = this.length > other.length
            ? [this.str, other.str]
            : [other.str, this.str];

        let result = new Uint8Array(strLarge.length + 1);
        let carry  = 0;
        for (let i = 0; i < strLarge.length; ++i) {
            const charLarge = strLarge[strLarge.length - 1 - i];
            const charSmall = i < strSmall.length ? strSmall[strSmall.length - 1 - i] : 0;
            result[i]       = charLarge + charSmall + carry;

            carry = result[i] > 9 ? 1 : 0;
            if (carry)
                result[i] -= 10;
        }
        if (carry)
            result[strLarge.length] = 1;
        else
            result = new Uint8Array(result.buffer, 0, strLarge.length);

        return new Bigint(result.reverse());
    }

    subtractFrom(other) {
        let result      = new Uint8Array(other.length);
        let borrow      = 0;
        let lastNonZero = null;

        for (let i = 0; i < other.length; ++i) {
            let otherIdx  = other.length - 1 - i;
            let thisIdx   = this.length - 1 - i;
            let charOther = other.str[otherIdx] - borrow;
            let charThis  = i < this.length ? this.str[thisIdx] : 0;

            borrow = (charOther < charThis) ? 1 : 0;
            if (borrow)
                charOther += 10;

            result[otherIdx] = charOther - charThis;
            if (result[otherIdx] > 0)
                lastNonZero = otherIdx;
        }
        if (lastNonZero)
            result = new Uint8Array(result.buffer, lastNonZero);

        return new Bigint(result);
    }

    roundUpToBaseTen() {
        if (this.str[0] === 9) {
            const arr = new Uint8Array(this.length + 1);
            arr[0] = 1;
            return new Bigint(arr);
        } else {
            const arr = new Uint8Array(this.length);
            arr[0] = this.str[0] + 1;
            return new Bigint(arr);
        }
    }

    roundDownToBaseTen() {
        const numZeros = Math.floor(2 ** (this.treeLevel() - 1));
        const arr = new Uint8Array(numZeros + 1);
        arr[0] = 1;
        return new Bigint(arr);
    }

    toString() {
        return this.str.map(x => x.toString()).join('');
    }

    static chopCommonPrefix(a, b) {
        if (a.length !== b.length)
            return;
        for (let i = 0; i < a.length; ++i)
            if (a.str[i] !== b.str[i]) {
                a.str = a.str.slice(i);
                b.str = b.str.slice(i);
                return;
            }
    }

    static calcDiffPoint(left, right) {
        return (left.treeLevel() === right.treeLevel())
            ? left.roundUpToBaseTen()
            : right.roundDownToBaseTen();
    }
}

function printTree(left, right) {
    let encoder       = new Encoder();
    const leftSlices  = expSlicer(left);
    const rightSlices = expSlicer(right);
    leftSlices.reverse().forEach((value, idx)  => encoder.add(idx, value));
    rightSlices.forEach((value, idx) => encoder.add(rightSlices.length - idx - 1, value));
    return encoder.print();
}

function expSlicer(arr) {
    const numExps = arr.treeLevel();
    const lengths = [0, ...Array(numExps).fill().map((_, i) => 2 ** i)];
    return lengths.map(e => {
        const l = Math.max(arr.length - e - Math.max(e, 1), 0);
        const u = arr.length - e;
        return arr.slice(l, u)
    }).reverse()
}

class Encoder {
    constructor() {
        this._encoded = [];
    }

    _last() {
        return this._encoded[this._encoded.length - 1];
    }

    add(level, value) {
        if (value.str[0] === 0)
            return;

        const last = this._last();
        if (last && last[0] === level)
            last[1] = last[1].addTo(value);
        else
            this._encoded.push([level, value]);
    }

    print() {
        return this._encoded.map(([idx, value]) => `${idx} ${value}`);
    }
}

function processData(input) {
    const [left, right] = input.split('\n').map(s => [...s].join(''));
    const tree = squareTenTree(left, right);
    console.log(tree.length);
    console.log(tree.join('\n'));
} 

module.exports = { squareTenTree, Bigint, expSlicer };

// --- HackerRank runtime boilerplate ---
process.stdin.resume();
process.stdin.setEncoding('ascii');

let _input = '';
process.stdin.on('data', function (input) {
    _input += input;
});

process.stdin.on('end', function () {
    processData(_input);
});
