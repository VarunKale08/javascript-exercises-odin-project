const palindromes = function (str) {
    
    // we remove all the punctuations and spaces and convert the string to lower cases 
    const cleanStr = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()\s]/g, '').toLowerCase();


    // Reverse the cleanStr string
    // first we convert the str into arr using split and then reverse the array and again convert it into an string using join
    const reverseStr = cleanStr.split('').reverse().join('');

    // Compare the cleanStr with its reverse
    return cleanStr === reverseStr;
};



// Do not edit below this line
module.exports = palindromes;
