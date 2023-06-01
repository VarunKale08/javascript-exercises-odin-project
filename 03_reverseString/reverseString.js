const reverseString = function(gvnString) {

    let revSol = "";

    for(let i=gvnString.length-1 ;i >=0; i--){
        revSol+= gvnString[i];
    }

    // revSol = revSol + arrReverse[i];

    return revSol;

    
};

// Do not edit below this line
module.exports = reverseString;
