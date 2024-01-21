/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    const pairs = {
        '(': ')',
        '{': '}',
        '[': ']'
    };

    for (const char of s) {
        if (Object.keys(pairs).includes(char))
            stack.push(char);
        else
            if ( char != pairs[stack.pop()] )
                return false;
    }

    return stack.length === 0;
};
