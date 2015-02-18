// create a function firstReverse that takes 
// a single string parameter 
// and returns the string in reverse order

var strInput = "this is a test";

var firstReverse = function(strArg) {
    var strReverse="";
    
    // method 1: via for	
    // for (var i=strArg.length-1; i>=0; i--) {
	// 	strReverse += strArg[i];
	// 	//console.log(i, strReverse);
	// }

    // method 2: reverse()
    // strReverse = strArg.split('').reverse().join('');

    // method 3: via map()
    // var strArray = strArg.split('');
    // strArray.map(function(item,i,arr){
    //     //console.log("return: ", arr[arr.length-1-i]);
    //     strReverse += arr[arr.length-1-i];
    //     //console.log(strReverse);
    //     return strReverse;
    // });

    // method 4: via _.map()
    var strArray = strArg.split('');
    _.map(strArray, function(list, iteratee, context) {
        // console.log(list);
        // console.log(iteratee);
        // console.log(context);
        strReverse += context[context.length-1-iteratee];
        return strReverse;
    }); 

    return strReverse;
}

var resultFirstReverse = firstReverse(strInput);
console.log("firstReverse: ", resultFirstReverse)


