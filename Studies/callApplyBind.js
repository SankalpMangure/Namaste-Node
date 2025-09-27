const obj = { name: "sankalp" };

function temp() {
  console.log(this.name);
}

temp.call(obj); //// its take arg list and execute
temp.apply(obj) //// its take arg array and execute
temp.bind(obj)() //// return new function