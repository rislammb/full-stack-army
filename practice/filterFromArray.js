const arr = [1, 2, 3, null, false, 'ddad', 4, 5, '', 'stack', 6, 7];

// filter number from array with imperative paradigm
let count = 0;
for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (typeof arr[i] !== 'number') {
      arr[i] = arr[j];
      arr[j] = undefined;
    }
  }
  if (arr[i] === undefined) count += 1;
}
arr.length -= count;
console.log(arr);

// filter number from array with declarative paradigm
const result = arr.filter(item => typeof item === 'number');
console.log(result);