//=======================================================================
// Write a function called 'twins' which takes an array and returns true if every 
// pair of items in the array is the same.
// twins(['a', 'a', 'b', 'b', 'c', 'c']) should return true
// twins(['a', 'a', 'b', 'z']) should return false
// twins(['a', 'a', 'b']) should return false
// twins(['a', 'a', 'b', undefined]) should return false

// via for loop
var groupArray = function(arrayArg) {
    var resultArray=[];
    for (var i=0, j=0; i<arrayArg.length; i=i+2, j++) {
        if (arrayArg[i] === arrayArg[i+1]) {
            resultArray[j] = true;
            //console.log(arrayArg[i] + arrayArg[i+1]);
        } else {
            //console.log(arrayArg[i] + arrayArg[i+1]);
            resultArray[j] = false;
        }
    } 
    return resultArray;
}
