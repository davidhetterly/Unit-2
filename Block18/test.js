/*For each prompt below: 
Read the prompt.
Identify the expectations.
Write specifications for all the tests that would be useful for that prompt.
Try to take any "edge cases," or unexpected circumstances, into account, and write test specs for them.
Try not to write extraneous tests!*/


/*Unit Tests:
A function called "multiplication" that returns the product of the two input numbers.*/

const multiply = (x,y) => {
    const product = x * y;
    return product;
}

//Expect multiply to be typeof function
//Expect x and y to be number type
//Expect (if x or y is not a number) to be (string message defining acceptable type)
//Expect product variable to be product of multiplication
//Expect product of x and y to equal expected result


/*A function called "concatOdds" takes two arrays of integers as arguments. It should return a single array that only contains the odd numbers, in ascending order, from both of the arrays.
Example: concatOdds([3, 2, 1], [9, 1, 1, 1, 4, 15, -1])
...should result in [-1, 1, 3, 9, 15]
Think about the following; you may need to make assumptions or decisions about the prompt and how the code should behave:
What should happen with unexpected inputs?*/

//Expect [function] to be typeof function
//Expect [function] arguments to be two arrays only
//Expect [function] argument values to be typeof integer
//Expect [function] acceptable type message to be identified if [function] argument values are not integer or arguments are not arrays
//Expect [function] return array to be odd numbers only
//Expect [function] return array to be distinct values (no duplicates)
//Expect [function} return array to besort in ascended order

/*What kinds of unexpected inputs should we worry about?

/*Unexpected inputs such as:
1. receiving objects instead of arrays
2. receiving strings instead of integers
3. includes all numbers and not just odd numbers
4. includes all numbers without removing duplicates
5. value order is not sort optimized/ascending
6. values of arrays in function parameters are not typeof integers
*/

/*What should happen when there are multiples of the same odd number in the arrays? (Hint: We gave you the answer to this one in the example above.)*/

//If multiples of same odd number, then remove/delete/do not add to expected result return. 

/*
Functional Tests:
A shopping cart checkout feature that allows a user to check out as a guest (without an account), or as a logged-in user. They should be allowed to do either, but should be 
asked if they want to create an account or log in if they check out as a guest.
Think about the following; you may need to make assumptions or decisions about the prompt and how the feature should behave: */

/*
What should happen if the cart is empty?

//If cart empty, advise use cart empty and prompt user to continue shopping or login for user's saved cart
//If cart empty, total due equals zero

What needs to be shown to the user at each step of check out?
//At each step of check out, 
1. show list of items ordered, 
2. count of all items displayed as part of subtotal, 
3. sum of all item costs displayed as part of subtotal, 
4. delivery address displayed as part of order
5. tax collected based on delivery address displayed
6. total due displayed includes subtotal and tax
7. discounts if any displayed
8. if multiple delivery options/costs offered, selected delivery option cost added to subtotal

What behaviors of this feature does the prompt miss or gloss over?

//It misses the order of the feature. More efficient order is log in or create account or opt out/skip/proceed as guest.

Hint: Observe the shopping cart and checkout features of some popular websites to get some ideas!
*/