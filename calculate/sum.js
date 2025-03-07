// console.log("sum module executed")

var x= "Hello World"

function calculateSum(a, b) {
    console.log(a+b)
}

module.exports= {x, calculateSum};

module.exports.x = x;
module.exports.calculateSum = calculateSum