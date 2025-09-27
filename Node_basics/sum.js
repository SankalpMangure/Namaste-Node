var x = "from SSUUMM"
function calSum(a, b) {
  return a + b;
}

// // used in mjs (module export)

// add this to package.json
// {
//   "type": "module"
// }
// add this to package.json

// export var x = "from SSUUMM"
// export function calSum(a, b) {
//   return a + b;
// }
// // used in mjs (module export)

// module.exports = {
//   sum: x,
//   calSum: calSum
// }

module.exports = { sum, calSum }