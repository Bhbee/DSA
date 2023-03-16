/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let expectedBrackets = [];
    for (let letter = 0; letter < s.length; letter++) {
        if (s[letter] == '{') {
            expectedBrackets.push('}');
        } else if (s[letter] == '[') {
            expectedBrackets.push(']');
        } else if (s[letter] == '(') {
            expectedBrackets.push(')');
        }
        else if (expectedBrackets.pop() !== s[letter]) {
            return false;
        }
    }
    return !expectedBrackets.length;
};
