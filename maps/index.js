
// Question: Create a Map named student with the following key-value pairs:
let student = new Map([
    ["name", "Ahmed"], 
    ["grade", "A"], 
    ["age", 12]
])

console.log("initial map student: ", student)

// Question: Add a new key subject with the value "Mathematics" to the student map. Answer:
student.set("subject", "mathematics"); 
console.log("Add new key subject with value mathematics: ", student); 

// Question: Retrieve the value associated with the key grade in the student map. Answer:
console.log("Retrieve the value associated with the key grade: ", student.get("grade")); 

// Question: Check if the key age exists in the student map.
console.log("if the key age exists in the student map: ", student.has("age"));

// Question: Remove the key grade from the student map.
console.log("Remove the key grade from the student map: ", student.delete("grade")); 

// Question: Clear all key-value pairs from the student map. Answer:
console.log("Clear all key-value pairs from the student map: ", student.clear())

// Question: Create a Map named countryCodes with the following entries:

let countryCodes = new Map([
    ["US", "United States"],
    ["IN", "India"],
    ["GB", "United Kingdom"]
])

console.log("initial map countryCodes: "); 
for (const code of countryCodes) {
    console.log(code)
}

// Question: Use the forEach method to print all keys in the countryCodes map
console.log("Map countryCodes keys: "); 
countryCodes.forEach((country, code) => console.log(code))

// Question: Get an array of all keys in the countryCodes map using Map.keys 
const codes = [...countryCodes.keys()]
console.log("Map countryCodes keys: ", codes); 

// Question: Get an array of all values in the countryCodes map using Map.values
const countries = [...countryCodes.values()]
console.log("Map countryCodes values: ", countries); 

// Question: Get an array of all key-value pairs in the countryCodes map using Map.entries.
const countryKeyValue = [...countryCodes.entries()]
console.log("Map countryCodes key value pair: ", countryKeyValue); 

// Question: Use a Set to remove duplicate values from the array [1, 2, 2, 3, 4, 4, 5]
let arr = [1, 2, 2, 3, 4, 4, 5];
console.log("use a Set to remove duplicate values from arrray", [...new Set(arr)]);

// Question: Convert the student map to an object
console.log("Convert the student map to an object: ",Object.fromEntries(student)); 

// Question: Create a Map from the following object: { name: "Bob", age: 25, city: "Paris" }
const mapOfObj = new Map(Object.entries({ name: "Bob", age: 25, city: "Paris" }))
console.log("Convert the Object  to a map: ", mapOfObj ); 

// Question: Write a function getUniqueCharacters that takes a string and returns a Set of unique characters. 
function getUniqueCharacters(str){
    return new Set(str); 
}

console.log("Get Unique Characters: ", getUniqueCharacters("Hello world"))