const removeFromArray = function(arr, ...removeVals) {
    for(let removeVal of removeVals){
      while(arr.includes(removeVal)){
        let indexVal = arr.findIndex(elem => elem === removeVal);
        arr = arr.slice(0, indexVal).concat(arr.slice(indexVal + 1));
      }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
