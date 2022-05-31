function myReducer(array, cb, init) {
  let acc = init ? init : null;
  for (let i = 0; i < array.length; i++) {
    acc = cb(acc, array[i], i, array);
  }
  return acc;
}

// // calculate sum using our reducer
// const sum = myReducer([1, 2, 4, 7, 5], function(a, b){ 
//   return a + b
// });
// console.log(sum);

const arr = [1, 2, '', false, 3, NaN, false, 4, 5, 0];
const result = myReducer(arr, (acc, cur) => {
  if (cur) acc.push(cur * cur)
  return acc;
}, []);

console.log(result);
