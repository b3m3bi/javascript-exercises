const fibonacci = function (num) {
  let result;
  if (+num < 0) {
    result = 'OOPS';
  } else if (+num === 0) {
    result = 0;
  } else if (+num === 1) {
    result = 1;
  } else {
    series = [1, 1];
    let i = 2;
    while (i < +num) {
      let nextNumber = series[i - 2] + series[i - 1];
      series.push(nextNumber);
      i++;
    }
    result = series[series.length -1]
  }

  return result;
};

// Do not edit below this line
module.exports = fibonacci;
