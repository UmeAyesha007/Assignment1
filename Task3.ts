// Initialize an array with some initial elements
let myArray: number[] = [1, 2, 3, 4, 5];

console.log("Initial Array:", myArray);

// Modify array with methods
// Using push to add new elements to the end of the array
myArray.push(6, 7);
console.log("Array after push:", myArray);

// Using pop to remove the last element from the array
const poppedElement = myArray.pop();
console.log("Array after pop:", myArray);
console.log("Popped element:", poppedElement);

// Using shift to remove the first element from the array
const shiftedElement = myArray.shift();
console.log("Array after shift:", myArray);
console.log("Shifted element:", shiftedElement);

// Using unshift to add new elements to the beginning of the array
myArray.unshift(0, -1);
console.log("Array after unshift:", myArray);
//Subarray Creation
// Initialize an array with some initial elements
let my_Array: number[] = [1, 2, 3, 4, 5];

console.log("Initial Array:", my_Array);

// Using splice to create a subarray by removing elements from the original array
const removedElements = my_Array.splice(1, 2); // Removes 2 elements starting from index 1
console.log("Array after splice:", my_Array);
console.log("Removed elements:", removedElements);

// Creating a subarray without modifying the original array using slice
const subArray = my_Array.slice(1, 3); // Returns elements from index 1 to index 2 (not including index 3)
console.log("Subarray using slice:", subArray);
console.log("Original Array remains unchanged:", my_Array);
