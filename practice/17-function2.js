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

// Function is a value

// // 1. store function in a variable
// function testFunc() {
//   console.log('I am test function');
// }
// const fn = testFunc;
// fn();
// const arr = [3, testFunc, fn];
// const obj = { func: testFunc };
// function returnFn() {
//   return testFunc;
// }

// 2. create function using constructor

// // create function from string
// const strToObj = new Function('str', `const obj = {};
// for (let s of str) {
//   if(s !== ' ') {
//     obj[s] = s;
//   }
// }
// return obj`)
// console.log(strToObj('Abu Bakra'));

// // create function from object
// const fData = {
//   params: ['a', 'b'],
//   body: ['const r = a + b', 'return r']
// };
// const fBody = fData.body.reduce((acc, cur) => {
//   acc += cur + ';';
//   return acc;
// }, '')
// const objFunc = new Function(...fData.params, fBody);
// console.log(objFunc(10, 20));

// create function from array
const operations = [
  {
    args: [10, 20],
    params: ['a', 'b'],
    body: 'console.log("a + b = ", a + b)'
  },
  {
    args: [10, 20],
    params: ['a', 'b'],
    body: 'console.log("a - b = ", a - b)'
  },
  {
    args: [10, 20],
    params: ['a', 'b'],
    body: 'console.log("a * b = ", a * b)'
  },
  {
    args: [],
    params: [],
    body: 'console.log("No parameter, no arguments")'
  },
  {
    params: ['n'],
    args: [5],
    body: `
      for (let i = 0; i < n; i++) {
        let line = '';
        for (let j = 0; j < n; j++) {
          line += '* '; 
        }
        console.log(line);
      }
    `
  }
];

operations.forEach(operation => {
  const fn = new Function(...operation.params, operation.body);
  fn(...operation.args);
})