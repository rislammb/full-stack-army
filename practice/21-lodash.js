// ##### 1. _.chunk function
const chunk = (arr, size = 1) => {
  if (arr && arr.length > 0) {
    const newArr = [];
    for (let i = 0; i < arr.length; i += size) {
      newArr.push(arr.slice(i, i + size));
    }
    return newArr;
  } else return [];
};
// const array = ['a', 'b', 'c', 'd'];
// const result = chunk(array, 3);
// console.log(result);

// ##### 2. _.compact function
const compact = (arr) => {
  return arr.reduce((acc, cur) => {
    if (cur) acc.push(cur);
    return acc;
  }, [])
}
// const array = [1, 0, 2, false, 'test', null, 3, '', undefined, 4, NaN];
// const result = compact(array);
// console.log(result);

// ##### 3. _.concat function
const concat = (arr, ...values) => {
  console.log(values);
  if (arr) {
    const newArr = [...arr];
    for (let i = 0; i < values.length; i++) {
      if (values[i].length > 0) {
        for (let j = 0; j < values[i].length; j++) {
          newArr.push(values[i][j]);
        }
      } else {
        newArr.push(values[i]);
      }
    }
    return newArr;
  } else {
    return []
  }
}
// const array = [1];
// const result = concat(array, [[2]], [3], 4);
// console.log(result);

// ##### 4. _.difference function
const difference = (arr, values) => {
  if (arr && arr.length > 0) {
    if (values && values.length > 0) {
      let newArr = [];
      for (let i = 0; i < arr.length; i++) {
        let equal = false;
        for (let j = 0; j < values.length; j++) {
          if (arr[i] === values[j]) {
            equal = true
          }
        }
        if (!equal) newArr.push(arr[i]);
      }
      return newArr;
    } else {
      return arr
    }
  } else {
    return []
  }
}
// const array = [1, 2, 4, 6, 2];
// const result = difference(array, [2, 3, 9, 4, 2]);
// console.log(result);

// ##### 5. _.drop function
const drop = (arr, n = 1) => {
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
const dropRight = (arr, n = 1) => {
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

// ##### 7. _.fill function
const fill = (arr, val, start = 0, end = arr.length) => {
  for (let i = start; i < end; i++) {
    arr[i] = val;
  }
  return arr;
}
// const array = [4, 6, 8, 10, 7];
// const result = fill(array, '*', 1, 3);
// console.log(result);

// *** Utility function for find frist/last matched index ***
function findIndexUtil(array, value, start, fromLast) {
  let index = -1;
  for (let i = start; fromLast ? i > -1 : i < array.length; fromLast ? i-- : i++) {
    if (typeof value === 'function') {
      if (array[i] && value(array[i])) {
        index = i;
        break;
      }
    } else if (typeof value === 'object') {
      if (value.length) {
        if (value[1] === array[i][value[0]]) {
          index = i;
          break;
        }
      } else {
        let bool = [];
        for (const v in value) {
          if (value[v] !== array[i][v]) {
            bool.push(false);
          }
        }
        if (bool.length === 0) {
          index = i;
          break;
        }
      }
    } else if (typeof value === 'string') {
      if (array[i][value]) {
        index = i;
        break;
      }
    }
  }
  return index;
}

// ##### 8. _.findIndex function
function findIndex(array, value, fromIndex = 0) {
  return findIndexUtil(array, value, fromIndex);
}

const users = [
  { 'user': 'abdullah', 'active': false },
  { 'user': 'musa', 'active': true },
  { 'user': 'muhammad', 'active': false },
]
// const result = findIndex(users, (o) => o.user === 'muhammad', 3);
// console.log(result);

// ##### 9. _.findLastIndex function
function findLastIndex(array, value, fromIndex = array.length - 1) {
  return findIndexUtil(array, value, fromIndex, true);
}
const result = findLastIndex(users, (o) => o.user === 'musa', 5);
console.log(result);