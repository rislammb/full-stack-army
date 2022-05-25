const numbers = [2, 3, 16, 7, 9];

numbers.forEach(function(value, _, arr) {
  console.log(value, arr);
})

let sum = 0;
numbers.forEach(function(value) {
  if (value < 8) {
    sum += value
  }
});

console.log('Total less than 8 =', sum);