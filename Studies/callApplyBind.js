const obj = { name: "sankalp" };

function temp(a,b) {
  console.log(this.name+"__"+a+"__"+b); //call & apply & bind
}

temp.call(obj,"SANKALP","MANGURE"); // its take arg list and execute
temp.apply(obj,["SANKALPPPPP","MANGUREEEEE"]) // its take arg array and execute
const a = temp.bind(obj,"SANKALP A()","MANGURE A()") // return new function
a()
