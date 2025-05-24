const reverseString = function(str) {
    return str.split('').reverse().reduce((reversed, char) => reversed + char, "");
};

// Do not edit below this line
module.exports = reverseString;
