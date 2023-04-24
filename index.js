//create an object named "customer", and give it the given "keys", and "values"*/

const customer = {
    firstName : "jake",
    lastName : "smith",
    email : "jaekSmih!aol.com",
    phone : "undefined",
    zipCode : "631",
    favoriteFlavors : "32",
    cupSize : "medium",
    favoriteStore : "Target",
    firstVisit : "false",
};

//I will access the properties in the object using [] notation to change some of them
// 1.) write name of object you're changing. 2.) add a [] next to it  
// 3.) write name of key you want to change inside of ""
// 4.) add a space, an "= sign", and another space
// 5.) write new value of the key being changed inside of '', followed by ;
// 6.) to print, type console.log and put () around the object name followed by ;
// 7.) in terminal, type node (file name), so: node index.js
customer["email"] = 'jak3Smith1992@email.com';
customer["phone"] = '3195551234';
customer["zipCode"] = '63132';
customer["favoriteFlavors"] = 'coffee, strawberry, and matcha';
console.log(customer);

//I will use the delete keyword to delete the keys zipcode and favorite store
// type "delete", then the object you are deleting from
// type .  then type the name of the key you wish to delete
// print using console.log(object name), and in terminal node file name (index.js)
delete customer.zipCode
delete customer.favoriteStore

console.log(customer);

//I will use . notation to add the requested new key:values to object customer
// 1.) type name of object you wish to add to followed by a . (dot)
// 2.) type name of new key, use a space, an "=" sign, and another space
// 3.) type the value for the new key inside "", followed by ;
// 4.) print using method described above
customer.toppings = "chocolate sprinkles, wafer staws, and gummy bears";
customer.futureFlavors = "mango";
customer.todaysPurchaseCost = 5.32;
console.log(customer);

// I want to print the "keys" in the object in an array, so I will use
// Object.keys  Do this by writing Console.log followed by ().  Inside
// (), type Object.keys(name of object)) followed by ;   SO:

console.log(Object.keys(customer));

// Then print in terminal