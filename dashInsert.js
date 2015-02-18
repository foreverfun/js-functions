//Write a function dashInsert that takes a single num 
// parameter and returns the num with inserted dashes ('-') 
// etween adjacent odd digits. For example: if num is 454793 
// the output should be "4547-9-3".
var dashInsert = function(num) {
    //console.log(num.toString());
    var num2String = num.toString();
    var str2Array = num2String.split('');
    //console.log(str2Array)
    str2Array.map(function(currentValue, index, array) {
        // odd #, add - at the end
        if (parseInt(currentValue)%2) {
            if (parseInt(array[index+1])%2) {
            array[index] += "-";
            //console.log("array element:", array[index]);
            }
        }
    });
    //console.log(str2Array);
    return str2Array.join('');
}

console.log("dashInsert 454793: ", dashInsert(454793));
console.log("dashInsert 3547831: ", dashInsert(3547813));

