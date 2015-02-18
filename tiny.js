// =====================================================
// tiny
var tiny = function(aNum) {
  if ((aNum < 1) && (aNum > 0)) {
    return true;
  } else {
    return false; 
  }
};

console.log(tiny(0.3));
console.log(tiny(14));
console.log(tiny(-5));