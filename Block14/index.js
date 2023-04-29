console.clear();
console.log("David Hetterly");
console.log("Team Squirtle");
console.log("2302-acc-pt-web-pt-c");
console.log("4/20/2023");
console.log("Workshop: Loops and Arrays");
console.log();
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

const inputArray1 = [2, 4, 6, 8, 11, 20, 15, 22];
const expectedArray1 = [11,15];
let inputArrayString1 = ("Input Array 1: " + inputArray1);
let expectedResultString1 = ("Expected Result: "+expectedArray1);
/*
start solution
*/
//If I use the filter method instead of for
//const actualArray = inputArray.filter(n=>n%2);
const actualArray1 = [];
for (let i = 0; i < inputArray1.length ; i++){
    if (inputArray1[i] % 2 !== 0){
      actualArray1.push(inputArray1[i]);
    }
}
/*
end solution
*/

let actualResultString1 = ("Actual Result: "+actualArray1);
let isCorrect1 = (expectedArray1.toString()==actualArray1.toString());
console.log(inputArrayString1);
console.log(expectedResultString1);
console.log(actualResultString1);
console.log("expectedResult === actualResult? "+ isCorrect1);
console.log();

const inputArray2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const expectedArray2 = [1, 3, 5, 7, 9];
let inputArrayString2 = ("Input Array 2: " + inputArray2);
let expectedResultString2 = ("Expected Result: "+expectedArray2);
/*
start solution
*/
//If I use the filter method instead of for
//const actualArray = inputArray.filter(n=>n%2);
const actualArray2 = [];
for (let i = 0; i < inputArray2.length ; i++){
    if (inputArray2[i] % 2 !== 0){
      actualArray2.push(inputArray2[i]);
    }
}
/*
end solution
*/

let actualResultString2 = ("Actual Result: "+actualArray2);
let isCorrect2 = (expectedArray2.toString()==actualArray2.toString());
console.log(inputArrayString2);
console.log(expectedResultString2);
console.log(actualResultString2);
console.log("expectedResult === actualResult? "+ isCorrect2);
console.log();

const inputArray3 = [70, 42, 55, 81, 21, 91, 34];
const expectedArray3 = [55, 81, 21, 91];
let inputArrayString3 = ("Input Array 3: " + inputArray3);
let expectedResultString3 = ("Expected Result: "+expectedArray3);
/*
start solution
*/
//If I use the filter method instead of for
//const actualArray = inputArray.filter(n=>n%2);
const actualArray3 = [];
for (let i = 0; i < inputArray3.length ; i++){
    if (inputArray3[i] % 2 !== 0){
      actualArray3.push(inputArray3[i]);
    }
}
/*
end solution
*/

let actualResultString3 = ("Actual Result: "+actualArray3);
let isCorrect3 = (expectedArray3.toString()==actualArray3.toString());
console.log(inputArrayString3);
console.log(expectedResultString3);
console.log(actualResultString3);
console.log("expectedResult === actualResult? "+ isCorrect3);
console.log();

//-----------

const inputArray4 = [2, 4, 6, 8, 10, 11, 12];
const expectedArray4 = [11];
let inputArrayString4 = ("Input Array 4: " + inputArray4);
let expectedResultString4 = ("Expected Result: "+expectedArray4);
/*
start solution
*/
//If I use the filter method instead of for
//const actualArray = inputArray.filter(n=>n%2);
const actualArray4 = [];
for (let i = 0; i < inputArray4.length ; i++){
    if (inputArray4[i] % 2 !== 0){
      actualArray4.push(inputArray4[i]);
    }
}
/*
end solution
*/

let actualResultString4 = ("Actual Result: "+actualArray4);
let isCorrect4 = (expectedArray4.toString()==actualArray4.toString());
console.log(inputArrayString4);
console.log(expectedResultString4);
console.log(actualResultString4);
console.log("expectedResult === actualResult? "+ isCorrect4);
console.log();
console.log("End Only Odds");
console.log();

/*
For vowel vs consonant, I'm thinking same conditional but compare to vowels using or statement
If array index value = "a" or "e" or "i" or "o" or "u", then add to vowel counter, else add to consonant counter
I'll need an array, vowel counter variable, consonant counter variable, an increment, and a console.log
Or something like that.
*/
console.log("Run Vowel vs Consonant");
console.log("-------------");
console.log("Instructions: ");
console.log("Create a JavaScript code that accepts a string of lowercase letters. Print the word followed by how many consonants and vowels it has.");
console.log("'a', 'e', 'i', 'o', and 'u' are considered vowels. ");
console.log("Every other letter is considered a consonant.");
console.log("Hint: Define two variables that keep track of the number of consonants and vowels.");
console.log();

let vvcArrayNum;
let vvcInput;
let vvcExpected;
let vvcActual
let vvcInputArray
let vvcVowelCount;
let vvcConsonantCount;
let vvcInputString;
let vvcExpectedString;
let vvcActualString;
let vvcCorrect;
const vvcVowels = ['a', 'e', 'i', 'o', 'u']

vvcArrayNum = 1
vvcInput = "hello"
vvcExpected = "hello has 3 consonants and 2 vowels"
vvcActual = ""
vvcInputArray = vvcInput.split('');
vvcVowelCount = 0;
vvcConsonantCount = 0;
vvcInputString = "Input Array "+vvcArrayNum + ": " + vvcInput;
vvcExpectedString = "Expected Result: " + vvcExpected;
console.log(vvcInputString);
console.log(vvcExpectedString);
/*
start solution
*/
for(i=0;i<=vvcInput.length -1;i++){
    if (vvcVowels.includes(vvcInputArray[i])){
        vvcVowelCount++
    } else{
        vvcConsonantCount++
    }
}
/*
end solution
*/
vvcActual = vvcInput + " has " + vvcConsonantCount + " consonants and " + vvcVowelCount + " vowels"
vvcActualString = "Actual Result: " + vvcActual;
vvcCorrect =  vvcExpected === vvcActual;
console.log(vvcActualString);
console.log("expectedResult === actualResult? " + vvcCorrect);
console.log();

vvcArrayNum = 2
vvcInput = "ukelele"
vvcExpected = "ukelele has 3 consonants and 4 vowels"
vvcActual = ""
vvcInputArray = vvcInput.split('');
vvcVowelCount = 0;
vvcConsonantCount = 0;
vvcInputString = "Input Array "+vvcArrayNum + ": " + vvcInput;
vvcExpectedString = "Expected Result: " + vvcExpected;
console.log(vvcInputString);
console.log(vvcExpectedString);
/*
start solution
*/
for(i=0;i<=vvcInput.length -1;i++){
    if (vvcVowels.includes(vvcInputArray[i])){
        vvcVowelCount++
    } else{
        vvcConsonantCount++
    }
}
/*
end solution
*/
vvcActual = vvcInput + " has " + vvcConsonantCount + " consonants and " + vvcVowelCount + " vowels"
vvcActualString = "Actual Result: " + vvcActual;
vvcCorrect =  vvcExpected === vvcActual;
console.log(vvcActualString);
console.log("expectedResult === actualResult? " + vvcCorrect);
console.log();

vvcArrayNum = 3
vvcInput = "awesome"
vvcExpected = "awesome has 3 consonants and 4 vowels"
vvcActual = ""
vvcInputArray = vvcInput.split('');
vvcVowelCount = 0;
vvcConsonantCount = 0;
vvcInputString = "Input Array "+vvcArrayNum + ": " + vvcInput;
vvcExpectedString = "Expected Result: " + vvcExpected;
console.log(vvcInputString);
console.log(vvcExpectedString);
/*
start solution
*/
for(i=0;i<=vvcInput.length -1;i++){
    if (vvcVowels.includes(vvcInputArray[i])){
        vvcVowelCount++
    } else{
        vvcConsonantCount++
    }
}
/*
end solution
*/
vvcActual = vvcInput + " has " + vvcConsonantCount + " consonants and " + vvcVowelCount + " vowels"
vvcActualString = "Actual Result: " + vvcActual;
vvcCorrect =  vvcExpected === vvcActual;
console.log(vvcActualString);
console.log("expectedResult === actualResult? " + vvcCorrect);
console.log();

vvcArrayNum = 4
vvcInput = "onomatopoeia"
vvcExpected = "onomonopia has 4 consonants and 6 vowels"
vvcActual = ""
vvcInputArray = vvcInput.split('');
vvcVowelCount = 0;
vvcConsonantCount = 0;
vvcInputString = "Input Array "+vvcArrayNum + ": " + vvcInput;
vvcExpectedString = "Expected Result: " + vvcExpected;
console.log(vvcInputString);
console.log(vvcExpectedString);
/*
start solution
*/
for(i=0;i<=vvcInput.length -1;i++){
    if (vvcVowels.includes(vvcInputArray[i])){
        vvcVowelCount++
    } else{
        vvcConsonantCount++
    }
}
/*
end solution
*/
vvcActual = vvcInput + " has " + vvcConsonantCount + " consonants and " + vvcVowelCount + " vowels"
vvcActualString = "Actual Result: " + vvcActual;
vvcCorrect =  vvcExpected === vvcActual;
console.log(vvcActualString);
console.log("expectedResult === actualResult? " + vvcCorrect);
console.log();

vvcArrayNum = 5
vvcInput = "textbook"
vvcExpected = "textbook has 5 consonants and 3 vowels"
vvcActual = ""
vvcInputArray = vvcInput.split('');
vvcVowelCount = 0;
vvcConsonantCount = 0;
vvcInputString = "Input Array "+vvcArrayNum + ": " + vvcInput;
vvcExpectedString = "Expected Result: " + vvcExpected;
console.log(vvcInputString);
console.log(vvcExpectedString);
/*
start solution
*/
for(i=0;i<=vvcInput.length -1;i++){
    if (vvcVowels.includes(vvcInputArray[i])){
        vvcVowelCount++
    } else{
        vvcConsonantCount++
    }
}
/*
end solution
*/
vvcActual = vvcInput + " has " + vvcConsonantCount + " consonants and " + vvcVowelCount + " vowels"
vvcActualString = "Actual Result: " + vvcActual;
vvcCorrect =  vvcExpected === vvcActual;
console.log(vvcActualString);
console.log("expectedResult === actualResult? " + vvcCorrect);
console.log();

console.log("End Vowel versus Consonant");
console.log();
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
console.log("Run Reverse Array");
console.log("-------------");
console.log("Instructions: ");
console.log("With a for loop, create a JavaScript code that creates a new array in reverse order.");
console.log();

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
reverseInputNum = 1;
reverseInputArray = [1, 2, 3];
reverseExpectedResults = [3, 2, 1];
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

//assign variables for input array iteration
reverseInputNum = 2;
reverseInputArray = [1, 3, 5, 7, 9, 11];
reverseExpectedResults = [11, 9, 7, 5, 3, 1];
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

//assign variables for input array iteration
reverseInputNum = 3;
reverseInputArray = [20, 50, 30, 60, 200];
reverseExpectedResults = [200, 60, 30, 50, 20];
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

console.log();
console.log("End Reverse Array");
console.log();
/*
For FizzBuzz...
Fun fact, FizzBuzz was an interview question for Kelsey's daytime job or a past job/interview. lol
So, this looks like loop practice.
Start with a variable assigned as 1 that goes until less than or equal to 100 in
for (let i = 1; i <=100; I++) {
if (i % 3==0 && i % 5==0) {
console.log("FizzBuzz")
} else if (i % 5==0) {
console.log("Buzz")
} else if (i % 3==0) {
console.log("Fizz")
} else {
console.log(i)
}
}
Or something like that

*/
console.log("Run FizzBuzz");
console.log("-------------");
console.log("Instructions: ");
console.log("Create a JavaScript code that prints each number from 1 to 100 on a new line.");
console.log("For each multiple of 3, print 'Fizz' instead of the number.");
console.log("For each multiple of 5, print 'Buzz' instead of the number.");
console.log("For numbers that are multiples of both 3 and 5, print 'FizzBuzz' instead of the number.");

//declare variables for workshop tab
const fizzbuzzExpected = [1,2,"Fizz",4,"Buzz","Fizz",7,8,"Fizz","Buzz",11,"Fizz",13,14,"FizzBuzz",16,17,"Fizz",19,"Buzz","Fizz",22,23,"Fizz","Buzz",26,"Fizz",28,29,"FizzBuzz",31,32,"Fizz",34,"Buzz","Fizz",37,38,"Fizz","Buzz",41,"Fizz",43,44,"FizzBuzz",46,47,"Fizz",49,"Buzz","Fizz",52,53,"Fizz","Buzz",56,"Fizz",58,59,"FizzBuzz",61,62,"Fizz",64,"Buzz","Fizz",67,68,"Fizz","Buzz",71,"Fizz",73,74,"FizzBuzz",76,77,"Fizz",79,"Buzz","Fizz",82,83,"Fizz","Buzz",86,"Fizz",88,89,"FizzBuzz",91,92,"Fizz",94,"Buzz","Fizz",97,98,"Fizz","Buzz"]
let fizzbuzzActual = []
let fizzbuzzCorrect
//start solution
for (let i = 1; i <=100; i++) {
    let hulahoop = []; 
    if (i % 3==0 && i % 5==0) {
    hulahoop = "FizzBuzz"
    } else if  (i % 3==0){
    hulahoop = "Fizz"
    } else if  (i % 5==0){
    hulahoop = "Buzz"
    } else {
    hulahoop = i
    }
    console.log(hulahoop);
    fizzbuzzActual.push(hulahoop);
}
//assign variables related to solution and validation
fizzbuzzCorrect = fizzbuzzExpected.toString() === fizzbuzzActual.toString();
//start console(log) presentation
console.log("Expected Results: ")
console.log(fizzbuzzExpected);
console.log("Actual Results: ");
console.log(fizzbuzzActual);
console.log("expectedResult === actualResult? " +fizzbuzzCorrect);
console.log();
console.log("End FizzBuzz");
console.log();
