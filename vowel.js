//======================================================================= 
// Write a function called 'vowels' which takes a string and returns an array of 
// all the vowels in the string, including duplicates.
// vowels('alabama') should return ['a', 'a', 'a', 'a']
// vowels('What lets in youth?') should return ['a', 'e', 'i', 'o', 'u']

// via loop
var vowel = function(strArg) {
    var tempStr = [];
    var j=0;
    for (var i=0; i<strArg.length; i++) {
        if ((strArg[i] === "a") || (strArg[i] === "e") || (strArg[i] === "i") || (strArg[i] === "o") || (strArg[i] === "u")) {
            tempStr[j] = strArg[i];
            j++;
        }
    }
    //console.log(tempStr.toString());
    return tempStr;
}
console.log(vowel('alabama'));
console.log(vowel('What lets in youth?'));

// via filter
var strArg1 = "alabama";
var arrayArg1 = strArg1.split("");

var strArg2 = "What lets in youth?"
var arrayArg2 = strArg2.split("");

var vowelFilter = function(element) {
    if ((element === 'a') || (element === 'e') || (element === "i") || (element === "o") || (element === "u")) {
        //console.log("element: ", element);
        return true;
    }
    return false;
}

console.log(arrayArg1.filter(vowelFilter));
console.log(arrayArg2.filter(vowelFilter));