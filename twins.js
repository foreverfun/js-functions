var twins = function(arrayArg) {
    for (var k=0; k<arrayArg.length; k++) {
        //console.log(arrayArg) 
        if (!arrayArg[k]) {
            return false;
        }
    }
    return true;
}

console.log(twins(['a', 'a', 'b', 'b', 'c', 'c']));
console.log(twins(['a', 'a', 'b', 'z']));
console.log(twins(['a', 'a', 'b']));
console.log(twins(['a', 'a', 'b', undefined]));