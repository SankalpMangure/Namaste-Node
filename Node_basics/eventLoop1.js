const fs = require('fs')
const a = 100;

setImmediate(() => console.log("this is immediate"))

fs.readFile('./file.txt', "utf8", () => {
  console.log("reading file");

})

setTimeout(() => console.log("this is setTimeout"), 0)

function printA() {
  console.log("AAAAAAA function");
}

printA();
console.log("last line of code ");
