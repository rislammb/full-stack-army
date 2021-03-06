// const arr = [1, 2, false, 3, '', 4, 5, NaN, 6];

// // map - return same length array
// const strArr = arr.map(val => val.toString());
// console.log(strArr);

// // filter - return wanted item array
// const filtered = arr.filter(val => val);
// console.log(filtered);

// // combind map and filter
// const str = arr.filter(val => val).map(val => val.toString());
// console.log(str);

// // reduce - return sum
// const arr2 = [1, 2, 3, 4, 5];
// const sum = arr2.reduce((a, b) => a + b);
// console.log(sum);

// // reduce return - '12false345NaN6'
// const str = arr.reduce((acc, cur) =>{
//   acc += cur.toString()
//   return acc
// }, '');

// // reduce return - '[1, 2, 3, 4, 5, 6]'
// const result = arr.reduce((acc, cur, index) => {
//   if (index === 0) acc += '[';
//   if (cur) {
//     acc += cur.toString() + (index === arr.length - 1 ? '' : ', ');
//   }
//   if (index === arr.length - 1) acc += ']';
//   return acc;
// }, '')

// // reduce return truthy string - ['1', '2', '3', '4', '5', '6']
// const result = arr.reduce((acc, cur) => {
//   if (cur) acc.push(cur.toString());
//   return acc;
// }, [])

// console.log(result);


// optimized vs non-optimized code for array
const arr3 = [];
for (let i = 0; i<= 5000000; i++) {
  arr3.push(i);
};

console.time('non-optimized');
arr3.filter(item => item % 2 === 0).map(item => item * 2);
console.timeEnd('non-optimized');

console.time('optimized');
arr3.reduce((acc, cur) => {
  if(cur % 2 === 0) acc.push(cur * 2);
  return acc;
}, [])
console.timeEnd('optimized');