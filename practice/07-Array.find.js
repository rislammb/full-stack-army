const arr = [
  {id: 1, value: 10},
  {id: 2, value: 20},
  {id: 3, value: 30},
  {id: 4, value: 40},
  {id: 5, value: 50},
];

// // Find index from array, then update
// const index = arr.findIndex(function(item) {
//   return item.id === 4;
// })
// arr[index].value = 300;
  

// Find full item from array, then update
const obj = arr.find(function(item) {
  return item.id === 3;
})
console.log(obj)
obj.value = 400;

console.log(arr);