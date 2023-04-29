//David Hetterly
//2302-ACC-PT-WEB-PT-C Assignments Block 15 Workshop: Froyo Survey
//Due Thursday by 11:59pm
/*
After an initial meeting, the management team has decided they want to collect the following information. As a test case, you have your friend Jake complete the survey. 
Using what we know about JavaScript objects, create an object labeled customer and add the following key:value pairs:
keys	values
firstName	"jake"
lastName	"smith"
email	"jaekSmih!aol.com"
phone	undefined
zipCode	"631"
favoriteFlavors	32
cupSize	"medium"
favoriteStore	"Target"
firstVisit	false
*/
console.log("create an object labeled %ccustomer","font-weight= bold");
const customer = {
    firstName:"jake",
    lastName: "smith",
    email:"jaekSmih!aol.com",
    phone:undefined,
    zipCode:"631",
    favoriteFlavors:32,
    cupSize:"medium",
    favoriteStore: "Target",
    firstVisit:false,
}
console.table(customer);

/*
You notice that Jake made some mistakes when filling out the survey. You talk to Jake and gather the correct information. Modify the following properties in the customer object using bracket notation: 
email to "Jak3Smith1992@email.com"
phone to 3195551234
zipCode to "63132"
favoriteFlavors to "coffee", "strawberry", and "matcha"
*/

customer["email"] = "Jak3Smith1992@email.com";
customer["phone"] = 3195551234;
customer["zipCode"] = "63132";
customer["favoriteFlavors"] = ["coffee", "strawberry", "matcha"];
console.log("Modify the customer object using bracket notation")
console.table(customer);

/*
As you review the survey draft with the management team, they have decided to remove a couple of items from the survey. Delete the following properties in the customer object using the delete keyword.
zipCode
favoriteStore
*/

delete customer.zipCode;
delete customer.favoriteStore;

console.log("Delete zipCode and favoriteStore");
console.table(customer);

/*
The management team also wants to add the following items to the survey: toppings, future flavors, and today's purchase cost. 
You check with Jake, and he provides the other bits of information you need to add these keys. 
Add the following key:values to the customer object using dot notation:
toppings: "chocolate sprinkles", "wafer straws", and "gummy bears"
futureFlavors: "mango"
todaysPurchaseCost: 5.32
*/

customer.toppings = new Array('chocolate sprinkles','wafer straws','gummy bears');
customer.futureFlavors = "mango";
customer.todaysPurchaseCost = 5.32;
console.log("Add toppings, future flavors and total purchase cost");
console.table(customer);

/*
Before you finalize the survey, you decide to check your survey one last time. In an array, print the keys in your survey. You should have the following:
firstName
lastName
email
phone
favoriteFlavors
cupSize
firstVisit
toppings
futureFlavors
todaysPurchaseCost
*/

console.log("Print customer object keys only")
console.log(Object.keys(customer));
