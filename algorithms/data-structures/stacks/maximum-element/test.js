const assert         = require('assert');
const maximumElement = require('.');

it('should execute the operations from the query', () => {
    const m = (...e) => maximumElement(e.join('\n'));
    assert.deepEqual([1],      m('2', '1 1', '3'));
    assert.deepEqual([2],      m('3', '1 1', '1 2', '3'));
    assert.deepEqual([2],      m('3', '1 2', '1 1', '3'));
    assert.deepEqual([2],      m('4', '1 2', '1 1', '2', '3'));
    assert.deepEqual([1],      m('4', '1 2', '2', '1 1', '3'));
    assert.deepEqual([2, 2],   m('4', '1 2', '3', '1 1', '3'));
    assert.deepEqual([2],      m('5', '1 2', '1 3', '2', '1 1', '3'));
    assert.deepEqual([26, 91], m(
        '10',
        '1 97',
        '2',
        '1 20',
        '2',
        '1 26',
        '1 20',
        '2',
        '3',
        '1 91',
        '3',
    ));
});
