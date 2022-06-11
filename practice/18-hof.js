// Higher order function

// // ###### 1 ######
// function generateTwoRandom(max, whatDoYouWant) {
//   const random1 = Math.floor(Math.random() * max);
//   const random2 = Math.floor(Math.random() * max);
//   const result = whatDoYouWant(random1, random2);
//   return result;
// }

// console.log(generateTwoRandom(30, function(rand1, rand2) {
//   return rand1 + rand2
// }));
// console.log(generateTwoRandom(20, function(rand1, rand2) {
//   return rand1 - rand2
// }));
// console.log(generateTwoRandom(10, function(rand1, rand2) {
//   return rand1 * rand2
// }));

// ###### 2 ######
function power(p) {
  return function(n) {
    let result = 1;
    for (let i = 1; i <= p; i++) {
      result *= n
    }
    return result;
  }
}

const sqr = power(2);
const cube = power(3);

console.log('square', sqr(3));
console.log('cube', cube(2));
console.log('join invoke', power(2)(7));
