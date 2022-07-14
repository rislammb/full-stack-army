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
// function* generatorInGen() {
//   yield 1
//   yield* [5, 6]
//   yield 3
// }

// const inerIterator = generatorInGen();
// console.log(inerIterator.next());
// console.log(inerIterator.next());
// console.log(inerIterator.next());
// console.log(inerIterator.next());
// console.log(inerIterator.next());


// // ###### 3
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

// // ####### 4
// function* overrideGene() {
//   const result = yield 'hello';
//   console.log('result in generator', result);
// }

// const overrideIt = overrideGene();
// overrideIt.next();
// overrideIt.next('over');


// // ###### 5
// function* returnGene() {
//   yield 1;
//   yield 2;
//   yield 3;
// }
// const returnIt = returnGene()
// console.log(returnIt.next())
// console.log(returnIt.return('early returnd'))
// console.log(returnIt.next())


// // ###### 6
// function* errorGene() {
//   try {
//     yield 1;
//     yield 2;
//     yield 3;
//   } catch (e) {
//     console.log(e);
//   }
// }
// const errorIt = errorGene();
// console.log(errorIt.next());
// console.log(errorIt.throw('Something happend!'));


// ####### 7
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