// ##### 8. _.findIndex function
function findIndex(array, value, fromIndex = 0) {
  let index = -1;
  for (let i = fromIndex; i < array.length; i++) {
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

const users = [
  { 'user': 'abdullah', 'active': false },
  { 'user': 'musa', 'active': true },
  { 'user': 'muhammad', 'active': false },
]

const result = findIndex(users, function (o) { return o.user === 'abdullah' });
console.log(result);