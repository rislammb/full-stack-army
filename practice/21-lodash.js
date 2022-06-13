// // ##### 1. _.chunk function
// const chunk = (arr, size) => {
// if (size > 0) {
//     const newArr = [];
//     for (let i = 0; i < arr.length; i += size) {
//       newArr.push(arr.slice(i, i + size));
//     }
//     return newArr;
//   } else return []
// };
// const array = ['a', 'b', 'c', 'd'];
// const result = chunk(array, 7);
// console.log(result);

// ##### 2. _.compact function
const compact = (arr) => {
  return arr.reduce((acc, cur) => {
    if (cur) acc.push(cur);
    return acc;
  }, [])
}
const array = [1, 0, 2, false, 'test', null, 3, '', undefined, 4, NaN];
const result = compact(array);
console.log(result);