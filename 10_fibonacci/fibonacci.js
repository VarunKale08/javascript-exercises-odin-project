const fibonacci = function(getNum) {

     // Convert the string to a number using the + operator
     const pureNum = +getNum;

     // Check if the conversion is successful (is a valid number)
     if (isNaN(pureNum) || pureNum < 0) {
         return "OOPS";
     }

     if(pureNum == 1){
        return 1;
     }

    let prevNum = 0, nextNum = 1;
    let getResult;

    for(let i=1;i<pureNum;i++){
        getResult = prevNum + nextNum;
        prevNum = nextNum;
        nextNum = getResult;
    }
    return getResult;
};

// Do not edit below this line
module.exports = fibonacci;
