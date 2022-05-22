// // without variable
// console.log('Rayhanul Islam', 'Rayhanul Islam'.length);

// // with variable
// let name = 'Rayhanul Islam';
// console.log(name, name.length);

// other benefit of variable
const names = ['Abu Rayhan', 'Shaker Hossain', 'Akib Ahmed'];
let index = 0;
let name = '';

setInterval(() => {
  // // variable const never reassignable
  // names = 'reassign';
  name = names[index++];
  // console.log('Rayhanul Islam', 'Rayhanul Islam'.length);
  console.log(name, name.length);
  if (index === names.length) {
    index = 0;
  }
}, 700);