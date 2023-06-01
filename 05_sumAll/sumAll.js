const sumAll = function(sumFrom, sumTo) {


    //check if any of he arguments passed is negative
    if(sumFrom < 0 || sumTo<0){
        return "ERROR";
    }

    // if first value is > then the second then we need to replace them
    if(sumFrom > sumTo)
    {
        let tempVar = sumFrom;
        sumFrom = sumTo;
        sumTo = tempVar; 
    }

    // to check if no is int or not
    if(Number.isInteger(sumFrom) == false || Number.isInteger(sumTo) == false){
        return "ERROR";
    }

    let getSum = 0;

    for(let i=sumFrom; i<= sumTo; i++){
        getSum+= i;
    }

    return getSum;
};

// Do not edit below this line
module.exports = sumAll;
