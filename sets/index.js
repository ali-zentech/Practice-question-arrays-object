const num = new Set([1, 2, 3, 4, 5]); 
console.log("Initial set: ", num); 

// Question: Add the value 6 to the numbers set
num.add(6); 
console.log("Add num 6 to set: ", num); 

// Question: Check if the value 3 exists in the numbers set.
console.log("Check if value 3 exist in set: ", num.has(3))

// Question: Remove the value 2 from the numbers set
num.delete(2)
console.log("Remove the value 2 from the numbers set: ", num)

// Question: Clear all values from the numbers set.
num.clear()
console.log("Clear all values from the numbers set: ", num)

// Question: Create a Set of fruits ['Apple', 'Banana', 'Mango']. Use a for...of loop to print each fruit. Answer:
const fruits = new Set(['Apple', 'Banana', 'Mango']); 
console.log("Initial Fruits set ForOf Loop to print: ");
for (const fruit of fruits) {
    console.log("   "+ fruit)
}

// Question: Use the forEach method to print each value in the numbers set. Answer:
console.log("Use For Each to print all values of number set: P.S Number set was cleared: ");
num.forEach(n=> console.log(num));

// Question: Create two sets, setA = [1, 2, 3] and setB = [3, 4, 5]. Find their union. Answer:

const setA = new Set([1, 2, 3]); 
const setB = new Set([4, 5, 6]);
console.log("Union of setA and setB: ",setA.union((setB))) 

// Question: Find the intersection of setA and setB.
console.log("Intersection of setA and setB: ",setA.intersection((setB))) 

// Question: Find the difference between setA and setB (values in setA but not in setB). Answer:
console.log("Deffrernece of setA with setB: ",setA.difference((setB)))