const fs = require('fs')
const a = 100;

setImmediate(() => console.log("this is immediate"))

Promise.resolve("promise").then(console.log)

fs.readFile('./file.txt', "utf8", () => {
  console.log("reading file");
})

setTimeout(() => console.log("this is setTimeout"), 0)

process.nextTick(() => console.log("process nexttick"))

function printA() {
  console.log("AAAAAAA function");
}

printA();
console.log("last line of code ");
