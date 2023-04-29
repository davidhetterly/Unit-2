function truthy()  {
    //message to identify the section
    console.log("\ntruthy: \n");
    //first variables
    const varString ="I am a string";
    const falseValue = false;
    const nullValue = null;
    const undefinedValue = undefined;
    const numberValue = 0;
    const emptyValue ="";
 
 
        
 
        if (varString == "I am a string") {
            
            
            console.log("true");
 
        }else{
            console.log("false");
        }
 
 
        if (falseValue) {
            console.log("true");
 
        }else{
            console.log("The boolean value false is falsy");
        }
 
 
 
        if (nullValue) {
            console.log("true");
 
        }else{
            console.log("The null value is falsy");
 
        }
 
        if (undefinedValue ) {
 
            console.log("true");
 
        } else {
            console.log("undefined is falsy");
        }
 
        if (numberValue) {
 
            console.log("true");
 
        } else {
 
            console.log("The number 0 is falsy (the only falsy number)");
            
        }
 
        if (emptyValue) {
 
            console.log("true");
            
        } else {
 
            console.log("The empty string is falsy (the only falsy string)");
            
        }
 
 
 
 
 
    }
 
 
 function numberLine()  {
    //message to identify the section
    console.log("\n Number Line: \n");
 
    //first variables
 
    let num1 = 50;
    let num2 =51;
 
    //all the comparations
    if ((num1+num2 ) > 100) {
        console.log("101 is greater than 100");
    } else {
        
    }
 
    num1 = 99;
    num2 =-2;
 
    if ((num1+num2 ) > 0) {
        console.log("97 is greater than 0");
    } else {
        
    }
 
    num1 = 0;
    num2 =101;
 
    if ((num1+num2 ) > 100) {
        console.log("101 is greater than 100");
    } else {
        
    }
 
 
    num1 = 500;
    num2 =-500;
 
    if ((num1+num2 ) == 0) {
        console.log("0 is equal to 0");
    } else {
        
    }
 
 
 
    num1 = -1000;
    num2 = 0;
 
    if ((num1+num2 ) < 0) {
        console.log("-1000 is a negative number");
    } else {
        
    }
 
 
    num1 = -5;
    num2 = 0;
 
    if ((num1+num2 ) < 0) {
        console.log("-5 is a negative number");
    } else {
        
    }
 
 
 }
 
 function greatherThan()  {
     //message to identify the section
    console.log("\n Greater Than Or Equal To 5: \n");
 
     //first variables
    let num1 = 5;
    let num2 =6;
 
 
     //all the comparations
    if (num1 >= 5 && num2 >=5 ) {
        console.log("true");
    } else {
        console.log("false");
    }
 
    num1 = 10;
    num2 = 11;
 
    if (num1 >= 5 && num2 >=5 ) {
        console.log("true");
    } else {
        console.log("false");
    }
 
    num1 = 0;
    num2 = 0;
 
    if (num1 >= 5 && num2 >=5 ) {
        console.log("true");
    } else {
        console.log("false");
    }
 
    num1 = 1000;
    num2 = -1000;
 
    if (num1 >= 5 && num2 >=5 ) {
        console.log("true");
    } else {
        console.log("false");
    }
 
    num1 = 6;
    num2 = 4;
 
    if (num1 >= 5 && num2 >=5 ) {
        console.log("true");
    } else {
        console.log("false");
    }
 
    num1 = 5;
    num2 = 5;
 
    if (num1 >= 5 && num2 >=5 ) {
        console.log("true");
    } else {
        console.log("false");
    }
 
 
 }
 
 function PairAndCompare()  {
 
     //message to identify the section
    console.log("\n  Pair And Compare: \n");
 
    //first variables
    let param1A = "cat";
    let param1B = "cat";
    let param2A = 6;
    let param2B = "6";
 
 
    //all the comparations
    if ((param1A === param1B) || (param2A === param2B)) {
        console.log("true");
    } else {
        console.log("false");
    }
    
 
    param1A = "five";
    param1B = 5;
    param2A = "dog";
    param2B = "dawg";
 
    if ((param1A === param1B) || (param2A === param2B)) {
        console.log("true");
    } else {
        console.log("false");
    }
 
    
 
    param1A = 0;
    param1B = false;
    param2A = "horse";
    param2B = "horse";
 
    if ((param1A === param1B) || (param2A === param2B)) {
        console.log("true");
    } else {
        console.log("false");
    }
 
    param1A = "eight";
    param1B = "eight";
    param2A = "ate";
    param2B = "ate";
 
 
    if ((param1A === param1B) || (param2A === param2B)) {
        console.log("true");
    } else {
        console.log("false ");
    }
 
    param1A = 11;
    param1B = "eleven";
    param2A = "four";
    param2B = "for";
 
 
    if ((param1A === param1B) || (param2A === param2B)) {
        console.log("true");
    } else {
        console.log("false");
    }
 
    param1A = "cake";
    param1B = "cake";
    param2A = "pie";
    param2B = "pie";
 
    if ((param1A === param1B) || (param2A === param2B)) {
        console.log("true");
    } else {
        console.log("false");
    }
 
 
 
 
 }
 
 
 truthy();
 numberLine();
 greatherThan();
 PairAndCompare();
 
 
 
 
 
 
 
 
 
 
 
 
