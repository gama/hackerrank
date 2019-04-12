const assert          = require('assert');
const matchingStrings = require('.');

it('should return the number of matching strings for each query', () => {
    assert.deepEqual([2, 1, 0], matchingStrings(
        ['aba', 'baba', 'aba', 'xzxb'],
        ['aba', 'xzxb', 'ab']
    ));

    assert.deepEqual([1, 0, 1], matchingStrings(
        ['def', 'de', 'fgh'],
        ['de', 'lmn', 'fgh']
    ));

    assert.deepEqual([1, 3, 4, 3, 2], matchingStrings(
        ['abcde', 'sdaklfj', 'asdjf', 'na', 'basdn', 'sdaklfj', 'asdjf', 'na', 'asdjf', 'na', 'basdn', 'sdaklfj', 'asdjf'],
        ['abcde', 'sdaklfj', 'asdjf', 'na', 'basdn'],
    ));
});
