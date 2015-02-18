//======================================================================= 
// Write a function called 'keyValue' which takes two arguments and returns an object 
// with a key of the first argument and the value of the second argument.
// keyValue('city', 'Denver') should return Object {city: "Denver"}

var keyValue = function(arg1, arg2) {
    console.log("arg1: ",arg1);
    console.log("arg2: ",arg2);
    var obj = {};
    obj[arg1] = arg2;
    return obj;
}

console.log("keyValue: ", keyValue('city','Denver'));
