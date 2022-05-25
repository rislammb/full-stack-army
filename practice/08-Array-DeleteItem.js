const arr = [
  {id: 1, value: 10},
  {id: 2, value: 20},
  {id: 3, value: 30},
  {id: 4, value: 40},
  {id: 5, value: 50},
];

// // splice - mutable (delete from original array)
// const index = arr.findIndex(function(item) {
//   return item.id === 4;
// })
// const arr2 = arr.splice(index, 1); // return deleted item
// console.log(arr);


// filter - immutable (delete from new array)
const newArray = arr.filter(item => item.id !== 3);
console.log('Main array', arr);
console.log('New array', newArray);