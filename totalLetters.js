//======================================================================= 
// Write a function called 'totalLetters' which takes an array of strings and 
// returns the total number of letters in all strings.
// totalLetters(['javascript', 'is', 'awesome']) should return 19
// totalLetters(['what', 'happened', 'to', 'my', 'function']) should return 24

// 1. via for loop
var totalLetters = function(strArray) {
    var resultLength = 0;
    for (var i=0; i<strArray.length; i++) {
        resultLength += strArray[i].length;
    }
    return resultLength;
}

console.log("for: totalLetters: ", totalLetters(['javascript', 'is', 'awesome']));
console.log("for: totalLetters: ", totalLetters(['what', 'happened', 'to', 'my', 'function']));

// 2. via map()
var countLength = function(s) {
    return s.length;
}

var strTemp1 = ['javascript', 'is', 'awesome'];
console.log("eval, map, join: ", eval(strTemp1.map(countLength).join("+")));
var strTemp2 = ['what', 'happened', 'to', 'my', 'function'];
console.log("eval, map, join: ", eval(strTemp2.map(countLength).join("+")));

// 3. via map() & reduce()
var add = function(a,b) {
    return a + b;
}

console.log("map, reduce: ", strTemp1.map(countLength).reduce(add));
console.log("map, reduce: ", strTemp2.map(countLength).reduce(add));




