const arr = [];
const obj = {};

for (let i = 0; i < 5000000; i++) {
  const o = {
    id: i,
    value: i
  };
  arr.push(o);  
  obj[i] = o;
}


// // update item- time different between array and object
// const idToUpdate = 4999999;
// console.time('array update');
// const findedObj = arr.find(item => item.id === idToUpdate);
// findedObj.value = 555;
// console.timeEnd('array update');

// console.time('object update');
// obj[idToUpdate].value = 555;
// console.timeEnd('object update');


// // add item- time different between array and object
// console.time('add to array');
// arr.unshift({id: 5000000, value: 5000000});
// console.timeEnd('add to array');

// console.time('add to object');
// obj[5000000] = {id: 5000000, value: 5000000};
// console.timeEnd('add to object');

// delete item- time different between array and object
console.time('delete from array');
const index = arr.findIndex(item => item.id === 4000000);
arr.splice(index,);
console.timeEnd('delete from array');

console.time('delete object');
delete obj[4000000];
console.timeEnd('delete object');
