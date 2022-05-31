const names = [
  'Abdullah',
  'Abu Bakra',
  'Ahmad Musa',
  'Huzaifa',
  'Ibne Abbas',
  'Israfil',
  'Masud',
  'Mamun',
  'Noman',
  'tareq',
  'Tofazzol'
];

const namesGroup = names.reduce((acc, cur) => {
  const fristLtr = cur[0].toUpperCase();
  if (fristLtr in acc) {
    acc[fristLtr].push(cur);
  } else {
    acc[fristLtr] = [cur];
  }
  return acc;
}, {})

Object.keys(namesGroup).forEach(key => {
  console.log('----- ' + key + ' ------');
  namesGroup[key].forEach(name => console.log(name));
  console.log('');
})