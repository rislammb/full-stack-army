// Utility function for generate random id
function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

const students = {
  'e86df047-c2b6-4e0f-8faf-19a2a76d224b': {
    id: 'e86df047-c2b6-4e0f-8faf-19a2a76d224b',
    name: 'Abdullah',
    email: 'abdullah@email.com'
  },
  'f8aec729-17cc-4b5f-a0e5-6f5cdffa491b': {
    id: 'f8aec729-17cc-4b5f-a0e5-6f5cdffa491b',
    name: 'Al-Amin',
    email: 'alamin@email.com'
  },
  '41613d57-f175-4bc6-9eae-af155ab4d524': {
    id: '41613d57-f175-4bc6-9eae-af155ab4d524',
    name: 'Muhammad',
    email: 'muhammad@email.com'
  }
};

// Add item to object
const std = {
  id: 'fa32c45f-e69e-4cae-a75f-254ecb959db3',
  name: 'Ahmad',
  email: 'ahmad@email.com'
}
students[std.id] = std;

// Update item from object
const idForUpdate = 'f8aec729-17cc-4b5f-a0e5-6f5cdffa491b';
const updateData = {
  name: 'Abul Kasem',
  email: 'akasem@email.com'
}
students[idForUpdate] = {
  ...students[idForUpdate],
  ...updateData
}
// console.log(students);

// delete from object
delete students[idForUpdate];

console.log(students);

