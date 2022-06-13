// execution context
// For test, use Run and Debug with breakpoint
function A(a) {
  console.log('This is A');

  if (a > 4) {
    console.log('a = ', a);
  } else {
    for (let i = 0; i < a; i++) {
      console.log(i);    
    }
  }
}

function B() {
  A(5);
}

function C() {
  B();
  B();
}

function D() {
  C();
  A(3);
}

D();