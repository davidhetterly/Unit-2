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
