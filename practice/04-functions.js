// Function
function myGreetings(name) {
  if(name) {
    console.log('Hello', name);
  } else {
    console.log('Provide your name');
  }
}
myGreetings();
myGreetings('Abdullah');

function generateRandom(min, max) {
  const number = Math.round(Math.random() * (max - min) + min);
  return number;
}

console.log(generateRandom(1, 15));