
function callback() {
  console.log('now adding is successful complete');

}
const add = function (a, b, callback) {

  var result = a + b;

  console.log('result: ' + result);

  callback();

}
add(3, 100989893, callback);