// function test() {
//   console.log("test function");
// }
// test();

function Person() {
  Person.prototype.test = function () {
    console.log("test function 111");
  }
}

const a = new Person();
a.test()


function x() {
  x.prototype.y = function () {
    console.log('path krne');
  }
  x.prototype.z = function () {
    console.log("this is Z");

  }
}

const res = new x()
res.y()
res.z()


