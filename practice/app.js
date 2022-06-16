// ##### 5. _.drop function
const drop = (arr, n=1) => {
  if (arr && arr.length > 0) {
      // method 1
      const newArr = [...arr];
      for (let i = 0; i < n; i++) {
        newArr.shift();
      }
      return newArr;

      // // method 2
      // return arr.reduce((acc, cur, index) => {
      //   if (index > n - 1) {
      //     acc.push(cur);
      //   }
      //   return acc;
      // }, []);
  } else return []; 
}
// const array = [1, 2, 5, 8, 9, 3];
// const result = drop(array, 3);
// console.log(result);

// ##### 6. _.dropRight function
const dropRight = (arr, n=1) => {
  if (arr && arr.length > 0) {
    // method 1
    const newArr = [...arr];
    for (let i = 0; i < n; i++) {
      newArr.pop();
    }
    return newArr;

    // // method 2
    // return arr.reduce((acc, cur, index) => {
    //   if (index < arr.length - n) {
    //     acc.push(cur);
    //   }
    //   return acc;
    // }, []);
  } else return []; 
}
// const array = [1, 2, 5, 8, 9, 3];
// const result = dropRight(array, 2);
// console.log(result);

// ##### 6. _.fill function
const fill = (arr, val, start = 0, end = arr.length) => {
  for (let i = start; i < end; i++) {
    arr[i] = val;
  }
  return arr;
}
const array = [4, 6, 8, 10, 7];
const result = fill(array, '*', 1, 3);
console.log(result);

