const fruits = ["Pineapple","Banana", "Orange", "Apple", "Mango"];

console.log("Actual Array: ",fruits);
// Question: Write code to access the second item in the fruits array. 
console.log("Second Item: ",fruits[1])

// Use a forEach loop to print each item in the fruits array.
console.log("ForEach Method to print each element")
fruits.forEach(fruit => console.log(fruit));

// Question: Add Orange to the end of the fruits array. 
fruits.push("Orange");
console.log("Orange Pushed at End: ",fruits);

// Question: Remove the first item (Apple) from the fruits array. 
fruits.shift(); 
console.log("Remove First Element: ",fruits); 

// Question: Add Grapes to the beginning of the fruits array. 
fruits.unshift("Grapes"); 
console.log("Grapes Pushed at Start: ",fruits); 

// Question: Remove the last item (Orange) from the fruits array. 
fruits.pop(); 
console.log("Remove last: ",fruits); 

// Question: Create a new array by adding Cherry and Peach to the existing fruits

const newFruits = [...fruits, "Cherry", "Peach"];
console.log("New Fruits Arrya",newFruits); 

// Question: Use splice to remove Banana from the fruits array (assume it is in the second position).
fruits.splice(1,1); 
console.log("Remove 2 Element banana: ",fruits); 

// Question: Use splice to insert Pineapple at the second position in the fruits array
fruits.splice(1,0,"Pineapple")
console.log("Insert Pineapple at 2 using splice: ",fruits); 

// Question: Use slice to create a new array with the first two items of the fruits array.
const two_fruits = fruits.slice(0, 2); 
console.log("slice to create a new array with the first two items: ",two_fruits); 

// Question: Find the index of Mango in the fruits array.
console.log("Index of Mango: ",fruits.indexOf("Mango")); 

// Question: Check if Banana exists in the fruits array using includes.
console.log("Banana exist in fruits array: ", fruits.includes("Banana")); 

// Question: Use find to locate the first fruit in the fruits array that starts with M
console.log("Find to locate the first fruit in the fruits array that starts with M: ", fruits.find(fruit => fruit.charAt(0) == "M")); 

// Question: Use filter to create a new array with fruits that have more than 5 letters.
const filter_fruits = fruits.filter(fruit => fruit.length > 5);
console.log("fruits that have more than 5 letters: ", filter_fruits); 

// Question: Sort the fruits array alphabetically
console.log('Sort fruits alphabatically: ', fruits.sort())

// Question: Reverse the fruits array.
console.log("Reverse the fruits array: ", fruits.reverse()); 

// Question: Use reduce to create a single string from the fruits array, with items separated by a comma and a space (, ).
console.log("Reduce to create a single string from the fruits array, with items separated by a comma and a space: ", fruits.reduce((fruit, str)=> str += ", " + fruit ))

// Question: Use map to create a new array where each fruit is in uppercase.
console.log("Map to create a new array where each fruit is in uppercase: ", fruits.map(fruit => fruit.toUpperCase())); 

// Question: Combine all the methods you've learned to:
// Add Kiwi at the start.
// Remove Mango from the array.
// Sort the remaining fruits alphabetically. 

fruits.unshift("Kiwi"); 
fruits.splice(fruits.indexOf("Mango"), 1); 
fruits.sort(); 

console.log("Add Kiwi at the start. Remove Mango from the array. ,Sort the remaining fruits alphabetically.  : ", fruits); 

// Question: Flatten a nested array [1, [2, 3], [4, [5, 6]]] using flat.
let nested_array = [1, [2, 3], [4, [5, 6]]] ; 
console.log("Bonus: Flat array: ", nested_array.flat(Infinity))


// Question: Use join to create a string from the fruits array with items separated by a hyphen (-).
console.log("Bonus: Use join to create a string from the fruits array: ", fruits.join("-"))
