//======================================================================= 
// Write a function called 'printObject' which takes a single object argument 
// and console.log's each key-value pair in the format key is value on separate lines.
// printObject({ a: 10, b: 20, c: 30 }) should print:
// a is 10
// b is 20
// c is 30
// printObject({ firstName: 'pork', lastName: 'chops' }) should print:
// firstName is pork
// lastName is chops

var printObject = function(objArg) {
    for (var key in objArg) {
        console.log( key + " is " + objArg[key]);
    }
}
console.log(printObject({ firstName: 'pork', lastName: 'chops' }));

