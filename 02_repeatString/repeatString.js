const repeatString = function(gvnString, gvnNum ) {
    let varConc = "";
    if(gvnNum < 0)
    {
        return "ERROR";
    } else {
        for(let i=0; i< gvnNum; i++){
            varConc += gvnString;
        }
    
        return varConc;
    }
    
};

// Do not edit below this line
module.exports = repeatString;
