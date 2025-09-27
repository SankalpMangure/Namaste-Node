require('./xyz')
// const obj = require('./sum')
const { sum, calSum } = require('./sum') // destructing
var nm = "om namah shivay"
console.log(nm);

var a = 10
var b = 20
// console.log("this is from sum module", obj.calSum(a, b));
console.log("this is from sum module", calSum(a, b));
// console.log("var SUM____", obj.sum);
console.log("var SUM____", sum);
// console.log(a + b);

// console.log(global); // prints objet like window function in javascript => window,this,self, frame this all return global object in browser
// console.log(this); // prints empty objet
// console.log(globalThis); // prints like global object

// console.log(global === globalThis); // true
