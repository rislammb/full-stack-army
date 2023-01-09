const mongoose = require('mongoose');
const Person = require('./PersonModel');

mongoose
  .connect('mongodb://localhost:27017/mongo-demo', {
    serverSelectionTimeoutMS: 4000,
  })
  .then(async () => {
    console.log('Database connected');

    // 1 - create new person
    const person = new Person({
      firstName: 'Abdur',
      lastName: 'Rahim',
      email: 'atalha@email.com',
      bio: { age: 11, single: false },
    });

    // 2 - find similar frist name person using methods
    person.findSimilarFirstName((_err, people) =>
      console.log('similar first named people', people)
    );

    // 3 - find by first name using static functions
    const people = await Person.findByFristName('Dur');
    console.log('find by first name', people);

    // 4 - find by first name using query
    Person.find()
      .byFristName('Dur')
      .exec((_err, qPeople) => {
        console.log('query people', qPeople);
      });

    // 5 - get person full name using virtuals
    console.log('person fullname', person.fullName);

    // 5 - set person full name using virtuals
    person.fullName = 'Abdur Rahman';

    // 6 - save person to database
    await person.save();
    console.log('finally created person', person);

    // 7 - get all people
    const allPeople = await Person.find();
    console.log('all people', allPeople);

    // // 8 - delete person from database
    // await Person.deleteMany({ firstName: 'Abdur' });
  })
  .catch((e) => console.log(e))
  .finally(() => mongoose.connection.close());
