// Scope

// 1. Global scope
const global = 'This variable accessable from whole document';

// 2. Local scope
function localScope() {
  const local = 'This variable can\'t access from outside this function';
  // variable global accessable from here
  console.log(global);
}
// variable local isn't access from here
// console.log(local);

localScope();


// 3. Block scope
{
  const block = 'This variable can\'t access from outside this block';
  {
    console.log(block);
  }
}
console.log(global);
// variable block isn't access from here
// console.log(block);