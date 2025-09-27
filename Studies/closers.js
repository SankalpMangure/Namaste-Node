// closers => // a function which bind together in its lexical environmant


// A JavaScript closure is created when an inner function remembers
// and has access to the variables and parameters of its outer function,
// even after the outer function has finished executing


function x(params) {
  var a = 10;
  function y() {
    console.log(a);
    console.log(params);
  }
  y()
}
x("sankalp");

