// Sum Numbers
function add(a: number, b: number): number {
    return a + b;
}
const result = add(5, 3); // Calling the add function with arguments 5 and 3
console.log(result); // Output will be 8, the sum of 5 and 3
// Check Even or odd
function checkEvenOrOdd(num: number): string {
    if (num % 2 === 0) {
        return `${num} is even.`;
    } else {
        return `${num} is odd.`;
    }
}
console.log(checkEvenOrOdd(5)); // Output: "5 is odd."
console.log(checkEvenOrOdd(10)); // Output: "10 is even."
// Calculate Area
function calculateArea(width: number, height: number): number {
    return width * height;
}
const width = 8;
const height = 12;

const area = calculateArea(width, height);
console.log(`The area of the rectangle is: ${area}`); // Output: "The area of the rectangle is: 96"
// String Reversal
function reverseString(str: string): string {
    return str.split('').reverse().join('');
}
console.log(reverseString('hello')); // Output: "olleh"
console.log(reverseString('world')); // Output: "dlrow"
// Temperature Conversion
function convertCelsiusToFahrenheit(celsius: number): number {
    return (celsius * 9 / 5) + 32;
}
const celsiusTemperature = 25;
const fahrenheitTemperature = convertCelsiusToFahrenheit(celsiusTemperature);
console.log(`The equivalent temperature in Fahrenheit is: ${fahrenheitTemperature}°F`);
