// ##### 1
// const arr = [1, 2, 3, 4];

// let index = 0;
// function next() {
//   return arr[index++];
// }

// console.log(next());
// for (let i = 0; i < 5; i++) {
//   console.log('Hello world!');
// }
// console.log(next());

// ##### 2
// const text = 'Stack';
// const textIterator = text[Symbol.iterator]();

// while (true) {
//   const data = textIterator.next();
//   if (data.done) {
//     break;
//   } else {
//     console.log(data.value);
//   }
// }

// ##### 3
const range = {
  start: 0,
  stop: 100,
  step: 5
}

range[Symbol.iterator] = function () {
  let current = this.start;
  const stop = this.stop;
  const step = this.step;
  return {
    next() {
      const obj = {
        value: current,
        done: current > stop
      }
      current += step
      return obj
    }
  }
}

for (const v of range) {
  console.log(v);
}