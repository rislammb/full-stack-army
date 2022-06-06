// // ###### 1 #######
// // Function composition

// function sum(a, b) {
//   // this console result does not access outside this function
//   console.log(a + b);
//   // if result need outside this function, return that result
//   // if not return from function, function return 'undefined' automatically
//   return a + b;
// }

// function sub(a, b) {
//   return a - b;
// }
 
// function times(a, b) {
//   return a * b;
// }

// const a = 10;
// const b = 20;
// const r = times(sum(a, b), sub(a, b));
// console.log(r);


// ####### 2 #######
// 1. Function is a value
function testFunc() {
  console.log('I am test function');
}
const fn = testFunc;
fn();

const arr = [3, testFunc, fn];
const obj = { func: testFunc };
function returnFn() {
  return testFunc;
}

// 2. Function constructor
const strToObj = new Function('str', `const obj = {};
for (let s of str) {
  if(s !== ' ') {
    obj[s] = s;
  }
}
return obj`)

console.log(strToObj('Abu Bakra'));