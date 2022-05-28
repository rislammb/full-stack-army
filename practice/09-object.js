// Object literal
const pen = {
  brand: 'matador', // represent data/information
  hasHead: true,
  price: 5,
  startWriting() { //represent work/functionalities
    console.log('writing started');
  },
  stopWriting() {
    console.log('writing stopped');
  },
  toString() { // overwrite toString method
    return this.brand
  }
}

pen.color = 'orange ';

// access value from object - dot / array notation
// console.log(pen.brand);
// console.log(pen['price']);

// when object pen covert to string use toString() method
// console.log('My pen is '+  pen);


// Object constructor
// const myObj = new Object();
const myObj = new Object({name: 'test'});
Object.freeze(myObj)
myObj.isOk = false;
// console.log(myObj);

// Array from object by keys
// console.log(Object.keys(pen));

// check - is object empty?
// console.log(Object.keys(pen).length === 0);


// Array from object by values
// console.log(Object.values(pen));

// iterate in object
for (const k in pen) {
    console.log(k + ' = ' + pen[k]);
}

// for-of loop does not work on object
// for (const i of pen) {
//   console.log(i);
// }

