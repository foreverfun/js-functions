// Write a function called wordCount which takes a single string parameter and returns the number of words the string contains (ie. "Never eat shredded wheat" would return 4). You can assume that words in the input string will be separated by only one space.
var wordCount = function(Input) {
  var inputArray=Input.split(" ");
  return inputArray.length;
 }

 document.write("length: " + wordCount(userInput) + "<br/>");
