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

