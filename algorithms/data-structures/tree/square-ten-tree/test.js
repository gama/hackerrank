const fs                = require('fs');
const assert            = require('assert');
const { squareTenTree } = require('.');
const { Bigint }        = require('.');
const { expSlicer }     = require('.');

const b = (x) => new Bigint(x);

it('should add Bigint instances', () => {
    assert.equal(b('0').addTo(b('1')).toString(),     '1');
    assert.equal(b('0').addTo(b('2')).toString(),     '2');
    assert.equal(b('1').addTo(b('1')).toString(),     '2');
    assert.equal(b('1').addTo(b('8')).toString(),     '9');
    assert.equal(b('1').addTo(b('9')).toString(),     '10');
    assert.equal(b('2').addTo(b('9')).toString(),     '11');
    assert.equal(b('9').addTo(b('9')).toString(),     '18');
    assert.equal(b('9').addTo(b('10')).toString(),    '19');
    assert.equal(b('9').addTo(b('11')).toString(),    '20');
    assert.equal(b('9').addTo(b('12')).toString(),    '21');
    assert.equal(b('10').addTo(b('10')).toString(),   '20');
    assert.equal(b('10').addTo(b('11')).toString(),   '21');
    assert.equal(b('1').addTo(b('99')).toString(),    '100');
    assert.equal(b('2').addTo(b('99')).toString(),    '101');
    assert.equal(b('8').addTo(b('92')).toString(),    '100');
    assert.equal(b('9').addTo(b('92')).toString(),    '101');
    assert.equal(b('10').addTo(b('90')).toString(),   '100');
    assert.equal(b('11').addTo(b('90')).toString(),   '101');
    assert.equal(b('10').addTo(b('91')).toString(),   '101');
    assert.equal(b('99').addTo(b('101')).toString(),  '200');
    assert.equal(b('99').addTo(b('102')).toString(),  '201');
    assert.equal(b('98').addTo(b('102')).toString(),  '200');
    assert.equal(b('97').addTo(b('113')).toString(),  '210');
    assert.equal(b('93').addTo(b('248')).toString(),  '341');
});

it('should add really large Bigint instances', () => {
    const n1 = b(Array(1e6).fill('9').join(''));
    const n2 = b('1')
    const r1 = b('1' + Array(1e6).fill('0').join(''));
    assert.deepEqual(n1.addTo(n2).str, r1.str);
});

it('should subtract Bigint instances', () => {
    assert.equal(b('0').subtractFrom(b('1')).toString(),     '1');
    assert.equal(b('1').subtractFrom(b('2')).toString(),     '1');
    assert.equal(b('1').subtractFrom(b('3')).toString(),     '2');
    assert.equal(b('2').subtractFrom(b('3')).toString(),     '1');
    assert.equal(b('1').subtractFrom(b('9')).toString(),     '8');
    assert.equal(b('1').subtractFrom(b('10')).toString(),    '9');
    assert.equal(b('1').subtractFrom(b('11')).toString(),    '10');
    assert.equal(b('2').subtractFrom(b('11')).toString(),    '9');
    assert.equal(b('9').subtractFrom(b('10')).toString(),    '1');
    assert.equal(b('9').subtractFrom(b('10')).toString(),    '1');
    assert.equal(b('10').subtractFrom(b('11')).toString(),   '1');
    assert.equal(b('1').subtractFrom(b('99')).toString(),    '98');
    assert.equal(b('1').subtractFrom(b('100')).toString(),   '99');
    assert.equal(b('2').subtractFrom(b('100')).toString(),   '98');
    assert.equal(b('1').subtractFrom(b('101')).toString(),   '100');
    assert.equal(b('2').subtractFrom(b('101')).toString(),   '99');
    assert.equal(b('3').subtractFrom(b('101')).toString(),   '98');
    assert.equal(b('10').subtractFrom(b('101')).toString(),  '91');
    assert.equal(b('11').subtractFrom(b('101')).toString(),  '90');
    assert.equal(b('99').subtractFrom(b('100')).toString(),  '1');
    assert.equal(b('100').subtractFrom(b('101')).toString(), '1');
});

it('should subtract really large Bigint instances', () => {
    const n1 = b('1')
    const n2 = b('1' + Array(1e6).fill('0').join(''));
    const r1 = b(Array(1e6).fill('9').join(''));
    assert.deepEqual(n1.subtractFrom(n2).str, r1.str);
});

it('should split a large number into exponentially sized slices', () => {
    assert.deepEqual(expSlicer(b('1')),          [ b('1') ]);
    assert.deepEqual(expSlicer(b('12')),         [ b('1'),    b('2') ]);
    assert.deepEqual(expSlicer(b('123')),        [ b('1'),    b('2'), b('3') ]);
    assert.deepEqual(expSlicer(b('1234')),       [ b('12'),   b('3'), b('4') ]);
    assert.deepEqual(expSlicer(b('12345')),      [ b('1'),    b('23'), b('4'), b('5') ]);
    assert.deepEqual(expSlicer(b('123456')),     [ b('12'),   b('34'), b('5'), b('6') ]);
    assert.deepEqual(expSlicer(b('1234567')),    [ b('123'),  b('45'), b('6'), b('7') ]);
    assert.deepEqual(expSlicer(b('12345678')),   [ b('1234'), b('56'), b('7'), b('8') ]);
    assert.deepEqual(expSlicer(b('123456789')),  [ b('1'),    b('2345'), b('67'), b('8'), b('9') ]);
    assert.deepEqual(expSlicer(b('1234567890')), [ b('12'),   b('3456'), b('78'), b('9'), b('0') ]);
    assert.deepEqual(expSlicer(b('1000010234')), [ b('10'),   b('1'), b('2'), b('3'), b('4') ]);
});

it('should return the square ten tree representation (values)', () => {
    testValues(1,            1,    ['0 1']);
    testValues(1,            2,    ['0 2']);
    testValues(1,            3,    ['0 3']);
    testValues(1,            9,    ['0 9']);
    testValues(1,           10,    ['1 1']);
    testValues(1,           11,    ['1 1', '0 1']);
    testValues(1,           12,    ['1 1', '0 2']);
    testValues(1,           20,    ['1 2']);
    testValues(1,          100,    ['2 1']);
    testValues(1,          110,    ['2 1', '1 1']);
    testValues(1,          111,    ['2 1', '1 1', '0 1']);
    testValues(2,           10,    ['0 9']);
    testValues(2,           11,    ['0 10']);
    testValues(2,           12,    ['0 11']);
    testValues(2,           19,    ['0 18']);
    testValues(2,           20,    ['0 9', '1 1']);
    testValues(9,            9,    ['0 1']);
    testValues(9,           10,    ['0 2']);
    testValues(9,           11,    ['0 3']);
    testValues(9,           20,    ['0 2', '1 1']);
    testValues(9,           21,    ['0 2', '1 1', '0 1']);
    testValues(10,          20,    ['0 1', '1 1']);
    testValues(10,          21,    ['0 1', '1 1', '0 1']);
    testValues(100,        100,    ['0 1']);
    testValues(101,        200,    ['2 1']);
    testValues(100,        200,    ['0 1', '2 1']);
    testValues(101,        201,    ['2 1', '0 1']);
    testValues(90,         211,    ['0 1', '1 1', '2 1', '1 1', '0 1']);
    testValues(901,       2000,    ['2 11']);
    testValues(901,       2100,    ['2 12']);
    testValues(1,        10000,    ['3 1']);
    testValues(1,        20000,    ['3 2']);
    testValues(1,        10111,    ['3 1', '2 1', '1 1', '0 1']);
    testValues(10000,    10000,    ['0 1'])
    testValues(9999,     10000,    ['0 2'])
    testValues(9991,     10000,    ['1 1'])
    testValues(9990,     10000,    ['0 1', '1 1'])
    testValues(9901,     10000,    ['2 1'])
    testValues(9901,     10000,    ['2 1']);
    testValues(9001,     10000,    ['2 10'])
    testValues(9901,     10100,    ['2 2']);
    testValues(8890,     10011,    ['0 1', '1 1', '2 11', '1 1', '0 1'])
    testValues(8890,     21111,    ['0 1', '1 1', '2 11', '3 1', '2 11', '1 1', '0 1'])
    testValues(8890,     11121111, ['0 1', '1 1', '2 11', '3 1111', '2 11', '1 1', '0 1'])
    testValues(1,       100000000, ['4 1']);
    testValues(1,       100000001, ['4 1', '0 1']);
    testValues(1,       100000001, ['4 1', '0 1']);
    testValues(1,       100000010, ['4 1', '1 1']);
    testValues(1,       100000100, ['4 1', '2 1']);
    testValues(1,       100010000, ['4 1', '3 1']);
    testValues(1,       100010000, ['4 1', '3 1']);
    testValues(1,       200000000, ['4 2']);
    testValues(9439590, 9825173,   ['0 1', '1 1', '2 4', '3 38', '2 51', '1 7', '0 3']);
});

const fileIds = ['01', '63'];
fileIds.forEach(id => {
    it(`should return the square ten tree representation (file ${id})`, () => {
        testFiles(id);
    });
});

function testValues(left, right, expected) {
    const tree = squareTenTree(left.toString(), right.toString());
    assert.deepEqual(tree, expected);
}

function testFiles(suffix) {
    const inputFile  = fs.readFileSync(`input${suffix}.txt`).toString();
    const outputFile = fs.readFileSync(`output${suffix}.txt`).toString();

    const [left, right] = inputFile.split('\n').map(s => [...s].join(''));
    const tree = squareTenTree(left, right);
    assert.equal(`${tree.length}\n${tree.join('\n')}\n`, outputFile);
}
