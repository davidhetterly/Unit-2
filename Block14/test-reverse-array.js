/*
For Reverse Array, Could I just use the built in method Array.prototype.reverse()?
Probably not. LOL
I'll probably take the array, find the last value, add it to a new array in the first position and repeat.
So I think I need:
an origin array,
a destination array,
an increment to count down from the end to the beginning of the origin array, and
an increment to count up from the beginning to the end of the destination array.
*/

//declare variables for workshop tab
//assign variables separately to make it easier to iterate through input arrays during replication.
let reverseInputNum;
let reverseInputArray;
let reverseExpectedResults;
let reverseActualResults;
let reverseInputString;
let reverseExpectedString;
let reverseActualString;
let reverseCorrect;

//assign variables for input array iteration
reverseInputNum = 4;
reverseInputArray = [1, -1, 2, -3, 5, -8, 13];
reverseExpectedResults = [13, -8, 5, -3, 2, -1, 1];
reverseActualResults = []
reverseInputString = "Input Array "+ reverseInputNum + ": " + reverseInputArray;
reverseExpectedString = "Expected Result: " + reverseExpectedResults;

//start solution
for(let i=reverseInputArray.length-1;i>=0;i--){
    reverseActualResults.push(reverseInputArray[i])
}

//assign variables related to solution and validation
reverseActualString = "Actual Result: " + reverseActualResults;
reverseCorrect =  reverseExpectedResults.toString() === reverseActualResults.toString();

//start console(log) presentation
console.log(reverseInputString);
console.log(reverseExpectedString);
console.log(reverseActualString);
console.log("expectedResult === actualResult? " + reverseCorrect);
console.log();
