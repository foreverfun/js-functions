//======================================================================= 
// Write a function called 'removeM' which takes a single string argument 
// and removes all 'm' characters from the string. The function should 
// return the new string.
// removeM('family') should return 'faily'
// removeM('memory') should return 'eory'

// 1. via for loop
var removeM = function(strArg) {
    var tempStr ="";
    for (var i=0; i<strArg.length; i++) {
      if (strArg[i] !== 'm') {
        tempStr += strArg[i]
      }
    }
    return tempStr;
}

console.log("for: family => faily: ", removeM('family'));
console.log("for: memory => eory: ", removeM('memory'));

// 2. via map join
var strArg1 = "family";
var arrayArg1 = strArg1.split("");

var strArg2 = "memory";
var arrayArg2 = strArg2.split("");

var checkALetter = function(aLetter) {
  if (aLetter !== 'm')
  return aLetter;
}

console.log("map, join: ", arrayArg1.map(checkALetter).join(""));
console.log("map, join: ", arrayArg2.map(checkALetter).join(""));
