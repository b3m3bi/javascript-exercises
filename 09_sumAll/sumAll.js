const sumAll = function(number1, number2) {
    if( (number1 < 0 || number2 < 0) || 
        (number1 - Math.floor(number1) > 0 || number2 - Math.floor(number2) > 0) ||
        (typeof number1 !== "number" || typeof number2 !== "number")
    ) {
        return "ERROR"
    }
    let geaterNum = number1 > number2 ? number1 : number2;
    let smallerNum = number1 <= number2 ? number1 : number2;
    let sum = 0;
    for(let i = smallerNum; i <= geaterNum; i++){
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
