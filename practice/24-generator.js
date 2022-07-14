// // ###### 1
// function* myGenerator() {
//   yield 1
//   yield 2
//   yield 3
// }

// const iterator = myGenerator();
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());


// // ###### 2
// function* rangeGenerator(start = 0, stop = 100, step = 5) {
//   for (let i = start; i <= stop; i += step) {
//     yield i;
//   }
// }

// const rangeIte = rangeGenerator(1, 10, 4);

// // console.log(rangeIte.next());
// // console.log(rangeIte.next());
// // console.log(rangeIte.next());
// // console.log(rangeIte.next());

// for (const v of rangeGenerator()) {
//   console.log(v);
// }

// ####### 3
function* generateId() {
  let index = 1;
  while (true) {
    yield index++;
  }
}

const generateUserId = generateId()
const generateProductId = generateId()

console.log('User id -', generateUserId.next().value);
console.log('User id -', generateUserId.next().value);
console.log('Product id -', generateProductId.next().value);
console.log('User id -', generateUserId.next().value);
console.log('Product id -', generateProductId.next().value);
console.log('Product id -', generateProductId.next().value);