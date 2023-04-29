console.clear();
console.log("David Hetterly");
console.log("Team Squirtle");
console.log("2302-acc-pt-web-pt-c");
console.log("4/19/2023");
console.log();


//Block13 If/else workshop
//Run [Is Truthy]
/*Using if/else statements, create a JavaScript code in a script tag that follows the following rules:
If the value is truthy, print true;
If the value is falsy, print the corresponding result:
"The boolean value false is falsy";
"The null value is falsy";
"undefined is falsy";
"The number 0 is falsy (the only falsy number)";
"The empty string is falsy (the only falsy string)";
*/

console.log("Run [Is Truthy]");
console.log("---------------");
//If the value is truthy, print true;
console.log("If truthy, print true");
console.log("If falsy, print the corresponding result");
console.log("The boolean value false is falsy");
console.log("The null value is falsy");
console.log("undefined is falsy");
console.log("The number 0 is falsy (the only falsy number)");
console.log("The empty string is falsy (the only falsy string)");
console.log()
let ControlValue = "I am a string"
let InputValue = "I am a string"
console.log("If  ControlValue " + typeof ControlValue + " type = " + ControlValue + " and InputValue " + typeof InputValue + " type = " + InputValue + ", Then:")

if (ControlValue === InputValue) {
    console.log("true")
} else {
    console.log("The value is a falsey.")
}
console.log()
//If the value is falsy, print the corresponding result:
//"The boolean value false is falsy";
InputValue = false
console.log("If  ControlValue " + typeof ControlValue + " type = " + ControlValue + " and InputValue " + typeof InputValue + " type = " + InputValue + ", Then:")

if (ControlValue === InputValue) {
    console.log()
} else {
    console.log("The boolean value false is falsy")
}
console.log()

/*If the value is falsy, print the corresponding result:
"The null value is falsy";*/
InputValue = null
console.log("If  ControlValue " + typeof ControlValue + " type = " + ControlValue + " and InputValue " + typeof InputValue + " type = " + InputValue + ", Then:")

if (ControlValue === InputValue) {
    console.log()
} else {
    console.log("The null value is falsy")
}
console.log()

/*If the value is falsy, print the corresponding result:
"undefined is falsy";*/

InputValue = undefined
console.log("If  ControlValue " + typeof ControlValue + " type = " + ControlValue + " and InputValue " + typeof InputValue + " type = " + InputValue + ", Then:")

if (ControlValue === InputValue) {
    console.log()
} else {
    console.log("undefined is falsy")
}
console.log()

/*If the value is falsy, print the corresponding result:
"The number 0 is falsy (the only falsy number)";*/

InputValue = 0
console.log("If  ControlValue " + typeof ControlValue + " type = " + ControlValue + " and InputValue " + typeof InputValue + " type = " + InputValue + ", Then:")

if (ControlValue === InputValue) {
    console.log()
} else {
    console.log("The number 0 is falsy (the only falsy number)")
}
console.log()

/*If the value is falsy, print the corresponding result:
"The empty string is falsy (the only falsy string)";*/

InputValue = ""
console.log("If  ControlValue " + typeof ControlValue + " type = " + ControlValue + " and InputValue " + typeof InputValue + " type = " + InputValue + ", Then:")

if (ControlValue === InputValue) {
    console.log()
} else {
    console.log("The empty string is falsy (the only falsy string)")
}
console.log()
console.log("End [Is Truthy]")
console.log()

console.log("Run [Number Line]")
console.log("-----------------");
//Run [Number Line]
/*
Using if/else if/else statements, JavaScript code in a script tag that takes the sum of two numbers and prints the corresponding result:

sum + " is less than -1000";
sum + " is a negative number";
sum + " is equal to 0";
sum + " is larger than 0";
sum + " is greater than 100";
*/

console.log("takes the sum of two numbers and prints the corresponding result:")

console.log('sum + " is less than -1000";')
console.log('sum + " is a negative number";')
console.log('sum + " is equal to 0";')
console.log('sum + " is larger than 0";')
console.log('sum + " is greater than 100";')
console.log()

let num1 = 50;
let num2 = 51;
var sumNum = num1 + num2;

console.log("Values to Test:");
console.log("num1 = " + num1 + " and num2 = " + num2);
console.log("Expected Print:");

if (sumNum < -1000) {
    console.log(sumNum + " is less than -1000");
} else if (sumNum < 0) {
    console.log(sumNum + " is a negative number");
} else if (sumNum == 0) {
    console.log(sumNum + " is equal to 0");
} else if (sumNum > 100) {
    console.log(sumNum + " is greater than 100"); 
} else if (sumNum > 0) {
    console.log(sumNum + " is greater than 0");
} else {
    console.log("outlier");
}
console.log();

num1 = 99;
num2 = -2;
var sumNum = num1 + num2;

console.log("Values to Test:");
console.log("num1 = " + num1 + " and num2 = " + num2);
console.log("Expected Print:");

if (sumNum < -1000) {
    console.log(sumNum + " is less than -1000");
} else if (sumNum < 0) {
    console.log(sumNum + " is a negative number");
} else if (sumNum == 0) {
    console.log(sumNum + " is equal to 0");
} else if (sumNum > 100) {
    console.log(sumNum + " is greater than 100"); 
} else if (sumNum > 0) {
    console.log(sumNum + " is greater than 0");
} else {
    console.log("outlier");
}
console.log();

num1 = 0;
num2 = 101;
var sumNum = num1 + num2;

console.log("Values to Test:");
console.log("num1 = " + num1 + " and num2 = " + num2);
console.log("Expected Print:");

if (sumNum < -1000) {
    console.log(sumNum + " is less than -1000");
} else if (sumNum < 0) {
    console.log(sumNum + " is a negative number");
} else if (sumNum == 0) {
    console.log(sumNum + " is equal to 0");
} else if (sumNum > 100) {
    console.log(sumNum + " is greater than 100"); 
} else if (sumNum > 0) {
    console.log(sumNum + " is greater than 0");
} else {
    console.log("outlier");
}
console.log();

num1 = 500;
num2 = -500;
var sumNum = num1 + num2;

console.log("Values to Test:");
console.log("num1 = " + num1 + " and num2 = " + num2);
console.log("Expected Print:");

if (sumNum < -1000) {
    console.log(sumNum + " is less than -1000");
} else if (sumNum < 0) {
    console.log(sumNum + " is a negative number");
} else if (sumNum == 0) {
    console.log(sumNum + " is equal to 0");
} else if (sumNum > 100) {
    console.log(sumNum + " is greater than 100"); 
} else if (sumNum > 0) {
    console.log(sumNum + " is greater than 0");
} else {
    console.log("outlier");
}
console.log();
num1 = -1000;
num2 = 0;
var sumNum = num1 + num2;

console.log("Values to Test:");
console.log("num1 = " + num1 + " and num2 = " + num2);
console.log("Expected Print:");

if (sumNum < -1000) {
    console.log(sumNum + " is less than -1000");
} else if (sumNum < 0) {
    console.log(sumNum + " is a negative number");
} else if (sumNum == 0) {
    console.log(sumNum + " is equal to 0");
} else if (sumNum > 100) {
    console.log(sumNum + " is greater than 100"); 
} else if (sumNum > 0) {
    console.log(sumNum + " is greater than 0");
} else {
    console.log("outlier");
}
console.log();
num1 = -5;
num2 = 0;
var sumNum = num1 + num2;

console.log("Values to Test:");
console.log("num1 = " + num1 + " and num2 = " + num2);
console.log("Expected Print:");

if (sumNum < -1000) {
    console.log(sumNum + " is less than -1000");
} else if (sumNum < 0) {
    console.log(sumNum + " is a negative number");
} else if (sumNum == 0) {
    console.log(sumNum + " is equal to 0");
} else if (sumNum > 100) {
    console.log(sumNum + " is greater than 100"); 
} else if (sumNum > 0) {
    console.log(sumNum + " is greater than 0");
} else {
    console.log("outlier");
}
console.log();
console.log("End [Number Line]");
console.log();
//Run [Greater than 5]
console.log("Run [Greater than 5]");
console.log("--------------------");
console.log("Print true if both parameters are greater or equal to 5.")
console.log();

num1 = 5;
num2 = 6;

console.log("Values to Test:");
console.log("num1 = " + num1 + " and num2 = " + num2);
console.log("Expected Print:");
console.log(num1 >= 5 && num2 >= 5);

console.log();
num1 = 10;
num2 = 11;

console.log("Values to Test:");
console.log("num1 = " + num1 + " and num2 = " + num2);
console.log("Expected Print:");
console.log(num1 >= 5 && num2 >= 5);

console.log();
num1 = 0;
num2 = 0;

console.log("Values to Test:");
console.log("num1 = " + num1 + " and num2 = " + num2);
console.log("Expected Print:");
console.log(num1 >= 5 && num2 >= 5);

console.log();
num1 = 1000;
num2 = -1000;

console.log("Values to Test:");
console.log("num1 = " + num1 + " and num2 = " + num2);
console.log("Expected Print:");
console.log(num1 >= 5 && num2 >= 5);

console.log();
num1 = 6;
num2 = 4;

console.log("Values to Test:");
console.log("num1 = " + num1 + " and num2 = " + num2);
console.log("Expected Print:");
console.log(num1 >= 5 && num2 >= 5);

console.log();
num1 = 5;
num2 = 5;

console.log("Values to Test:");
console.log("num1 = " + num1 + " and num2 = " + num2);
console.log("Expected Print:");
console.log(num1 >= 5 && num2 >= 5);
console.log();
console.log("End [Number Line]");
console.log();
//Run [Pair and Compare]*/
console.log("Run [Pair and Compare]");
console.log("----------------------");
console.log("Print true if at least one of the pairs is truthy.")
console.log();

let param1A = "cat";
let param1B = "cat";
let param2A = 6;
let param2B = "6";

console.log("Values to Test:");
console.log("param1A = " + param1A + " (type " + typeof param1A + ") and param1B = " + param1B + " (type " + typeof param1B + ") [" + (param1A === param1B) + "]");
console.log("param2A = " + param2A + " (type " + typeof param2A + ") and param2B = " + param2B + " (type " + typeof param2B + ") [" + (param2A === param2B) + "]");
console.log("Is at least one pair truthy? " + (param1A === param1B || param2A === param2B));

console.log();
param1A = "five";
param1B = 5;
param2A = "dog";
param2B = "dawg";

console.log("Values to Test:");
console.log("param1A = " + param1A + " (type " + typeof param1A + ") and param1B = " + param1B + " (type " + typeof param1B + ") [" + (param1A === param1B) + "]");
console.log("param2A = " + param2A + " (type " + typeof param2A + ") and param2B = " + param2B + " (type " + typeof param2B + ") [" + (param2A === param2B) + "]");
console.log("Is at least one pair truthy? " + (param1A === param1B || param2A === param2B));

console.log();
param1A = 0;
param1B = false;
param2A = "horse";
param2B = "horse";

console.log("Values to Test:");
console.log("param1A = " + param1A + " (type " + typeof param1A + ") and param1B = " + param1B + " (type " + typeof param1B + ") [" + (param1A === param1B) + "]");
console.log("param2A = " + param2A + " (type " + typeof param2A + ") and param2B = " + param2B + " (type " + typeof param2B + ") [" + (param2A === param2B) + "]");
console.log("Is at least one pair truthy? " + (param1A === param1B || param2A === param2B));

console.log();
param1A = "eight";
param1B = "eight";
param2A = "ate";
param2B = "ate";

console.log("Values to Test:");
console.log("param1A = " + param1A + " (type " + typeof param1A + ") and param1B = " + param1B + " (type " + typeof param1B + ") [" + (param1A === param1B) + "]");
console.log("param2A = " + param2A + " (type " + typeof param2A + ") and param2B = " + param2B + " (type " + typeof param2B + ") [" + (param2A === param2B) + "]");
console.log("Is at least one pair truthy? " + (param1A === param1B || param2A === param2B));

console.log();
param1A = 11;
param1B = "eleven";
param2A = "four";
param2B = "for";

console.log("Values to Test:");
console.log("param1A = " + param1A + " (type " + typeof param1A + ") and param1B = " + param1B + " (type " + typeof param1B + ") [" + (param1A === param1B) + "]");
console.log("param2A = " + param2A + " (type " + typeof param2A + ") and param2B = " + param2B + " (type " + typeof param2B + ") [" + (param2A === param2B) + "]");
console.log("Is at least one pair truthy? " + (param1A === param1B || param2A === param2B));

console.log();
param1A = "cake";
param1B = "cake";
param2A = "pie";
param2B = "pie";

console.log("Values to Test:");
console.log("param1A = " + param1A + " (type " + typeof param1A + ") and param1B = " + param1B + " (type " + typeof param1B + ") [" + (param1A === param1B) + "]");
console.log("param2A = " + param2A + " (type " + typeof param2A + ") and param2B = " + param2B + " (type " + typeof param2B + ") [" + (param2A === param2B) + "]");
console.log("Is at least one pair truthy? " + (param1A === param1B || param2A === param2B));

console.log();
console.log("End [Pair and Compare]")
console.log();
console.log("David Hetterly")
console.log("Team Squirtle")
console.log("2302-acc-pt-web-pt-c")
