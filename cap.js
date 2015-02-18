// Play with Map function
var cap = function(s) {
   var firstLetter = s[0];
   var rest = s.slice(1);
   return firstLetter.toUpperCase() + rest;
};

var names = ['tj', 'dominic', 'sindre', 'addy', 'isaac'];
console.log(names.map(cap).join(', ')); 
