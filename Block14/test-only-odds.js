/*
For Only Odds, I'm thinking I'm going to use a conditional to evaluate if the array index value is even or odd by using Modulo (%)
If remainder of number = 0, then delete number from array.
Or something like that.

make sure the VALUE at index i (array[i]) is even or odd and not the actual index (i)

*/
console.log("Run Only Odds");
console.log("-------------");
console.log("Instructions: ");
console.log("Create a JavaScript code that accepts an array of numbers and returns a new array with only the odd numbers from the original array. If there is only one odd number in the array, return an array with that single value.");
console.log();

/*
start solution
*/

const inputArray = [2, 4, 6, 8, 11, 20, 15, 22];
const expectedArray = [11,15];
//If I use the filter method instead of for
//const actualArray = inputArray.filter(n=>n%2);

const actualArray = [];
for (let i = 0; i < inputArray.length ; i++){
    if (inputArray[i] % 2 !== 0){
      actualArray.push(inputArray[i]);
    }
}

let isCorrect = expectedArray.toString()==actualArray.toString()

/*
end solution
*/

console.log("Input Array 1");
console.log(inputArray);
console.log("Expected Results:");
console.log(expectedArray)
console.log("Actual Results:");
console.log(actualArray);
console.log("expectedResult === actualResult? " + isCorrect);
console.log();
