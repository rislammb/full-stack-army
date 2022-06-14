// ##### 1. _.chunk function
const chunk = (arr, size=1) => {
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

// ##### 5. _.difference function
const drop = (arr, n=1) => {
  if (arr && arr.length > 0) {
      return arr.reduce((acc, cur, index) => {
        if (index > n - 1) {
          acc.push(cur);
        }
        return acc;
      }, [])
  } else {
    return [];
  }
}
const array = [1, 2, 5, 9, 3];
const result = drop(array, 3);
console.log(result);

