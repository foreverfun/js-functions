// Write a function palindrome that takes a single 
// string parameter and returns true if the parameter 
// is a palindrome (the string is the same forward as 
//     it is backward), otherwise returns false. For 
// example: palindrome("racecar") should return true 
// because "racecar" is also "racecar" backwards.
var palindrome = function (str) {
    var str2Array = str.split('');
    var strReverse = str2Array.reverse().join('');
    //console.log(strReverse); 
    if (str === strReverse) {
        return true;
    }
    else {
        return false;
    }
}

console.log("palindrome racecar: ", palindrome("racecar"));
console.log("palindrome test: ", palindrome("test"));

