require("./xyz")

const util = require("node:util")


// import {x, calculateSum} from "./sum.js" // used for esm pattern
// const {x, calculateSum} = require("./calculate/sum")

// const {calculateMultiply} = require("./calculate/multiply")

const {calculateSum, calculateMultiply} = require("./calculate")

const data = require("./data.json")

console.log(data)

var name = "Namaste NodeJS";

var a= 10;
var b=20;

calculateSum(a, b);
calculateMultiply(a,b);

// console.log(global);

// console.log(this); // Empty Object

console.log(globalThis === global)

// console.log(x)