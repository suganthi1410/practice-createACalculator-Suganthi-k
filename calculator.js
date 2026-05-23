// Calculator Program using object literal and Math module.
//Creating a object to group all the functions together.

const calculator = {

  // Absolute Value calculation
  absoluteValue(num) {
    return Math.abs(num);
  },

  // Power Calculation
  power(base, exponent) {
    return Math.pow(base, exponent);
  },

  // Finding Square Root
  squareRoot(num) {
    return Math.sqrt(num);
  },

  // Finding maximum number
  max(numbers) {
    return Math.max(...numbers);
  },

  // Finding Minimum number
  min(numbers) {
    return Math.min(...numbers);
  },

  // Finding random Integer in a Range
  randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },

  // Custom Rounding
  customRound(num, decimalPlaces) {
    return Number(num.toFixed(decimalPlaces));
  }
};

//Test cases 

console.log("Absolute Value of -45.67:", calculator.absoluteValue(-45.67));
//Output: Absolute Value of -45.67: 45.67

console.log("5 to the power of 3:", calculator.power(5, 3));
//Output: 5 to the power of 3:125

console.log("Square root of 144:", calculator.squareRoot(144));
//Output: Square root of 144: 12

console.log("Max:", calculator.max([3, 78, -12, 0.5, 27]));
//Output: Max: 78

console.log("Min:", calculator.min([3, 78, -12, 0.5, 27]));
//Output: Min:-12

console.log("Random number (1–50):", calculator.randomInt(1, 50));
//Output: Random number (1-50): 30

console.log("Rounded:", calculator.customRound(23.67891, 2));
//Output: Rounded: 23.68

//Extra test cases 
//Absolute value calculation
console.log("Extra test cases")
console.log("Absolute Value of 0:", calculator.absoluteValue(0));
//Output: Absolute Value of 0: 0
console.log("Absolute Value of -Infinity:", calculator.absoluteValue(-Infinity));
//Output: Absolute Value of -Infinity: Infinity

//Random number
console.log("Random number (-125 - 100):", calculator.randomInt(-125,100));
//Output: Random number (-125 - 100): -2

//Custom rounding
console.log("Rounded:", calculator.customRound(19.2368, 3));
//Output: Rounded: 19.237