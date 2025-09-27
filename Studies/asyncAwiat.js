// async function test() {
//   return "sankalp"
// }

// const a = test();

// a.then((data) => {
//   console.log(data);
// })
// console.log(a);


// below is the how you can resovle the promise using async and await
// const p = new Promise(function (resolve, reject) {
//   resolve("resolved")
// })

// async function temp() {
//   const a = await p;
//   console.log("using async await", a);
// }

// temp();

// difference between both
const pr = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("sankalp");
  }, 5000)
})

// using promise
function getdata() {
  pr.then((data) => {
    console.log(data);
  })
  console.log("first");
}
getdata();
// using promise

// using async wait
async function danger() {
  const res = await pr;
  console.log("aata bgu kon call hotay");
  console.log(res);
}
danger();
// using async wait