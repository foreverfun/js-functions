//======================================================================= 
// Write a function called 'getName' which takes a single object argument and 
// returns the value of the 'name' property of the given object.
// getName({ name: 'Luisa', age: 25 }) should return 'Luisa'

var getName = function(argObj) {
    for (var key in argObj) {
        if (key === "name")
            return argObj[key];
    }
}

console.log(getName({ name: 'Luisa', age: 25 }));











