// // ###### 1 ######
// // This global variable access from any where from this file
// // Here global is global scope variable
// const global = 'global variable';

// // create function
// function test(){
//   // global access possible here
//   console.log(global);
  
//   // This a, b and result variable can't access from outside this function
//   // Here a, b and result is block scope variable
//   const a = 10;
//   const b = 20;
//   const result = a + b + Math.max(a, b);
//   console.log(result);
// }

// // a, b and result access can't possible here

// // invoke or call function
// test();

// // ##### 2 #####
// // Here a and b (inside parenthesis) is - function parameter
// function test2(a = 5, b = 10) {
//   console.log(a + b + Math.max(a, b));
// }

// // Here 10 and 20 (inside parenthesis) is - function arguments 
// test2(10, 20);
// test2();
// test2(20, 15);


// ###### 3 ######
function sleep(name) {
  console.log(`${name} is sleeping`);
}

function awake(name) {
  console.log(`${name} is awake`);
}

function eat(name, food) {
  console.log(`${name} is taking ${food}`);
}

function walk(name, destination) {
  console.log(`${name} is walking to ${destination}`);
}

function study(name) {
  console.log(`${name} is studying`);
}

function work(name) {
  console.log(`${name} is working`);
}

function jobholderLifecycle(name) {
  awake(name);
  eat(name, 'breakfast');
  walk(name, 'office');
  work(name);
  eat(name, 'lunch');
  work(name);
  walk(name, 'home');
  eat(name, 'dinner');
  sleep(name);
}

jobholderLifecycle('Abdullah');
console.log('--------------------');
jobholderLifecycle('Huzaifa');


function studentsLifecycle(name) {
  awake(name);
  eat(name, 'breakfast');
  study(name);
  eat(name, 'lunch');
  study(name);
  eat(name, 'dinner');
  sleep(name);
}

studentsLifecycle('Belal');
console.log('--------------------');
studentsLifecycle('Ibne Abbas');