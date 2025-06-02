const palindromes = function (word) {
    let wordLettersOnly = word.split('').filter(char => {
        return /[a-zA-Z0-9]/.test(char)
    }).join('').toLowerCase();
    let reverse = wordLettersOnly.split('').reverse().join('');
    return reverse === wordLettersOnly ? true : false;
};

// Do not edit below this line
module.exports = palindromes;
