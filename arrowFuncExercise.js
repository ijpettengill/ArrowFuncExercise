// write the function using arrow shorthands

const double = (arr) => arr.map(val => val * 2);

//refactor the function to use arrow functions
//I assume that this means that the vaule were ment to be squared first

const squareAndFindEvens = numbers => numbers.map(val => val **2).filter(square => square % 2 ===0)