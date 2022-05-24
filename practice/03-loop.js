// Run block code until condition true
while (true){
  let num = Math.ceil(Math.random() * 100);
  // console.log('while loop', num);
  if (num === 77) break;
}

// Run 1st time immediately, then run block code until condition true
do {
  // console.log('inside do block');
} while (false);

// Run from staring point and repeat until to ending point
for (let i = 0; i < 7; i++) {
  // console.log(i);
}

// For loop- example
const student1 = {name: 'Rayahan', email: 'rayhan@email.com'}
const student2 = {name: 'Alvi', email: 'alvi@email.com'}
const student3 = {name: 'Mamun', email: 'mamun@email.com'}

const students = [student1, student2, student3];

for (let i = 0; i < students.length; i++) {
  sendMail(students[i].email)
}

function sendMail(email) {
  console.log('Mail send to', email)
}