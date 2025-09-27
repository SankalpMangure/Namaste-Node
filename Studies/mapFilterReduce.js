const arr = [5, 1, 3, 2, 6]

// map function which is called as higher order function
function double(x) {
  return x * 2;
}
const res = arr.map(double);
const res = arr.map(function double(x) {
  return x * 2;
});
const res = arr.map((x) => x * 2);
console.log(res);
// map function which is called as higher order function

// filter function which is called as higher order function => isEven, isOdd
const res = arr.filter((x) => {
  return x % 2 === 0;
})
console.log(res);
// filter function which is called as higher order function


// reduce function which is called as higher order function => sum, max
const res = arr.reduce(function (acc, curr) {
  // max
  if (curr > acc) {
    acc = curr
  }
  return acc
  // max
  // sum
  acc = acc + curr
  return acc;
  // sum
}, 0)
console.log(res);

// reduce function which is called as higher order function




