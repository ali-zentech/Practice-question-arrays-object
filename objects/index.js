let person = {  name: "John",
                age: 30,
                city: "New York",
            }
console.log("Access Name property Object Person: ", person["name"]); 

// Question: Access the name property of the person object and store it in a variable.
console.log("Access Name property Object Person: ", person["name"]); 

// Question: Add a new property isMarried with the value false to the person object.
person["isMarried"] = false; 
console.log("Add a new property isMarried with the value false: ", person); 

// Question: Delete the city property from the person object.
delete(person["city"])
console.log("Delete the city property : ", person); 

// Question: Add a method greet to the person object that logs "Hello, my name is John" to the console when called
person["greet"] = function() {
    console.log(`Hello, my name is ${this.name}`)
}
console.log("Greet Property : ", person);

// Question: Call the greet method of the person object.
process.stdout.write("Greet Property : ");
person["greet"](); 

// Question: Write a loop to print all keys of the person object
console.log("Loop over keys : ");
Object.keys(person).forEach(key => console.log("    ",key));

// Question: Write a loop to print all values of the person object. 
console.log("Loop over values : ");
Object.values(person).forEach(value => console.log("    ",value));

// Question: Use destructuring to extract the name and age properties from the person object. 
let {name, age} = person
console.log("Destructuring to extract: ", name, age)

// Question: Provide default values for destructuring if the properties gender and city do not exist.
let {city="LA", gender="Male"} = person
console.log("Destructuring to extract: ", city, gender)

console.log("\n Advance Operations \n")
// Question: Create a new object student that has the same properties as person, but add an additional property grade: "A".
const student = {...person, grade: "A"}
console.log("New object student that has the same properties as person, but add an additional property grade:A : ",student);

// Merge two objects obj1 = { a: 1, b: 2 } and obj2 = { b: 3, c: 4 } into a new object.
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 }; 
const new_obj = {...obj1, ...obj2}
console.log("Merge 2 array into one: ", new_obj);

// Question: Use Object.keys to get an array of all keys in the person object.
const array_keys = Object.keys(person)
console.log("Object.keys to get an array of all keys: ", array_keys);

// Question: Use Object.values to get an array of all values in the person object.
const array_values = Object.values(person)
console.log("Object.values to get an array of all values: ", array_values);

// Question: Use Object.entries to get an array of key-value pairs in the person object

console.log("Object.entries for ey value pair: ",
    Object.entries(person).forEach((key, value) => console.log(`   ${key} : ${value}`))
)

console.log("\n Checkking Propeties \n")

// Question: Check if the age property exists in he person object. 
console.log("Check if the age property exists: ", person.age? true: false); 

// Question: Use Object.hasOwn() to check if isMarried is a direct property of person
console.log("Check if the isMarried property exists in person hasOwn: ", Object.hasOwn(person, "isMarried"));

console.log("\n Freezing and Sealing\n")

// Question: Use Object.freeze to make the person object immutable. Try changing the age property.

Object.freeze(person);
console.log("person is now inmutable: ",person); 
person["age"] = 25; 
console.log("Did age changed: ",person); 

// Question: Use Object.seal on the person object and add a new property salary.
Object.seal(person)
console.log("person is now seal: ",person); 
person["salary"] = 150000; 
console.log("Slaray? : ",person); 

// Question: Write code to create a deep copy of the person object using JSON.stringify and JSON.parse
const deep_copy_person = JSON.parse(JSON.stringify(person)); 
console.log("Deep Copy of Person: ", deep_copy_person)

// Question: Create an array of objects representing books:
class book {
    constructor(title="name", author="author", publisher="publisher", price=0.0){
        this.title = title; 
        this.author = author; 
        this.publisher = publisher; 
        this.price = price;
    }
}

const books_arr  = [new book("OOP in java", "Viskan Sakran", "Apress", 200.0), new book("crime and puishment", "faydoor doveskkey", "Readings",149.0), new book("the silk roads", "peter frynkapon", "readings", 156.0)]
console.log("Array of books object: ", books_arr);


// Use filter to find all books with a price greater than 150.
console.log("Filter all books price more than 150: ", books_arr.filter(obj => obj['price'] > 150)); 

// Question: Use map to create an array of book titles
console.log("Array of titles: ", books_arr.map(obj => obj['title'])); 

// Question: Use reduce to calculate the total price of all books. 
console.log("Total Price: ", books_arr.reduce((sum,obj) => sum += obj['price'],0)); 

console.log("\nBonus Question\n")

// Question: Use a for...of loop to print the title and author of each book in the books array.
console.log("For of loop title and author"); 
for (const {title, author} of books_arr) {
    console.log(`   Title: ${title}, Author: ${author}`)
}

// Question: Write a function updateAge that takes an object and an age parameter, updates the object's age, and returns the updated object. 
function updateAge(obj, age){
    obj["age"] = age; 
    return obj; 
}

console.log("update age: test 1: ",updateAge({name: "paul", age:52}, 36))
console.log("update age: test 2: ",updateAge({name: "ahmed"}, 45))