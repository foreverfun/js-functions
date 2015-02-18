// =====================================================
// getSeconds
var getSeconds = function(aString) {
  var secondsArray = aString.split(":");
  return parseInt(secondsArray[0] * 60) + parseInt(secondsArray[1]);
};

console.log(getSeconds('01:30'));
console.log(getSeconds('10:25'));