// *** Utility function for find frist/last matched index ***
function findIndexUtil(array, value, start, fromLast) {
  let index = -1;
  for (let i = start; fromLast ? i > -1 : i < array.length; fromLast ? i-- : i++) {
    if (typeof value === 'function') {
      if (value(array[i])) {
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
// const result = findIndex(users, 'active');
// console.log(result);

// ##### 9. _.findLastIndex function
function findLastIndex(array, value, fromIndex = array.length - 1) {
  return findIndexUtil(array, value, fromIndex, true);
}
const result = findLastIndex(users, (o) => o.user === 'muhammad');
console.log(result);