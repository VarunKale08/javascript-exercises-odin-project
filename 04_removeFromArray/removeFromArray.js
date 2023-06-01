const removeFromArray = function(gvnArr, gvnArgs1, gvnArgs2, gvnArgs3, gvnArgs4) {

    for(let i= gvnArr.length-1; i>=0 ;i--){
        if((gvnArr[i] === gvnArgs1) || (gvnArr[i] === gvnArgs2) || (gvnArr[i] === gvnArgs3) || (gvnArr[i] === gvnArgs4) ){
            gvnArr.splice(i, 1);
        }
    }

    return gvnArr;

};

// Do not edit below this line
module.exports = removeFromArray;
