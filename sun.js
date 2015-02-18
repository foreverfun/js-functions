// =====================================================
// sun
var sun = function(aString) {
  var anchorString = "sun";
  return (aString.indexOf(anchorString) >= 0) ? true : false;
};

console.log(sun('sundries'));
console.log(sun('asunder'));
console.log(sun('catapult'));