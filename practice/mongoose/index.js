const mongoose = require('mongoose');
const Person = require('./PersonModel');

mongoose
  .connect('mongodb://localhost:27017/mongo-demo', {
    serverSelectionTimeoutMS: 4000,
  })
  .then(async () => {
    console.log('Database connected');

    // // 1 - create new person
    // const person = new Person({
    //   fristName: 'Abdur',
    //   lastName: 'Rahman',
    //   email: 'atalwha2@email.com',
    //   citizen: { idNumber: 12939244 },
    //   citizenRef: '63bd1bc66fbba2e4366f4be2',
    //   bio: { age: 11, single: false },
    //   certificates: ['ssc', 'hsc'],
    //   socialHandels: {
    //     github: 'rislammb',
    //     twitter: 'rislammb',
    //   },
    // });

    // // 2 - save person to database
    // await person.save();
    // console.log('created person', person);

    // // 3 - find one person
    // const person = await Person.findOne({ fristName: 'Abdur' });
    // console.log('find one person', person);

    // // 4 - find matched people
    // const matchedPeople = await Person.find({ fristName: 'Abdur' });
    // console.log('frist name matched people', matchedPeople);

    // const sortedPeople = await Person.find().sort({
    //   'bio.age': -1,
    //   fristName: 1,
    // });
    // console.log('sorted people', sortedPeople);

    // const matchedPeopleOver18 = await Person.find({ fristName: 'Abdur' })
    //   .where('bio.age')
    //   .gt(18);
    // console.log('frist name matched people age over 18', matchedPeopleOver18);

    // // 5 - get all people
    // const allPeople = await Person.find();
    // console.log('all people', allPeople);

    // // 6 - find similar frist name person using methods
    // person.findSimilarFirstName((_err, people) =>
    //   console.log('similar first named people', people)
    // );

    // // 7 - find by first name using static functions
    // const people = await Person.findByFristName('Dur');
    // console.log('find by first name', people);

    // // 8 - find by first name using query
    // Person.find()
    //   .byFristName('Dur')
    //   .exec((_err, qPeople) => {
    //     console.log('query people', qPeople);
    //   });

    // // 9 - get person full name using virtuals
    // console.log('person fullname', person.fullName);

    // // 10 - set person full name using virtuals
    // person.fullName = 'Abdur Rahim';

    // // 11 - delete one person from database
    // await Person.deleteOne({ email: 'atalha@email.com' });

    // // 12 - update one
    // await Person.updateOne(
    //   { e: 'arahman@email.cm' },
    //   { e: 'arahman@email.com', fristName: 'Abdur' },
    //   { runValidators: true }
    // );

    // // 13 - update many
    // await Person.updateMany({}, { $set: { lastName: 'Rahman' } });

    // // 11 - get all people
    // const allPeople = await Person.find();
    // console.log('all people', allPeople);

    // // 14 - delete many person from database
    // await Person.deleteMany({ firstName: 'Abdur' });
  })
  .catch((e) => console.log(e))
  .finally(() => mongoose.connection.close());
