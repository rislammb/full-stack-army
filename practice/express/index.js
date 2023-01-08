const mongoose = require('mongoose');

const personSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      minlength: [3, 'Minimum 3 characters long!'],
      maxlength: [10, 'Minimum 10 characters long!'],
    },
    lastName: {
      type: String,
      required: true,
      minlength: [3, 'Minimum 3 characters long!'],
      maxlength: [10, 'Minimum 10 characters long!'],
    },
    email: {
      type: String,
      get: (v) => v.toLowerCase(),
      set: (v) => v.toLowerCase(),
    },
    age: Number,
    bio: String,
    single: Boolean,
  },
  {
    methods: {
      findSimilarFirstName(cb) {
        return mongoose.model('Person').find({ firstName: this.firstName }, cb);
      },
    },
    virtuals: {
      fullName: {
        get() {
          return this.firstName + ' ' + this.lastName;
        },
        set(val) {
          this.firstName = val.substr(0, val.indexOf(' '));
          this.lastName = val.substr(val.indexOf(' ') + 1);
        },
      },
    },
  }
);

const Person = mongoose.model('Person', personSchema);

mongoose
  .connect('mongodb://localhost:27017/mongo-demo', {
    serverSelectionTimeoutMS: 1500,
  })
  .then(async () => {
    console.log('Database connected');
    // const people = await Person.find();
    // console.log('all people', people);

    const person = new Person({
      firstName: 'Abu',
      lastName: 'Talha',
      email: 'SiSDuDU@JDIj.cOm',
    });
    console.log('person before set', person);

    person.findSimilarFirstName((_err, people) =>
      console.log('similar first named people', people)
    );

    person.fullName = 'Abdur Rahman';
    await person.save();

    // console.log('created person fullname', person.fullName);
    // console.log('get email in loweracse', person.email);
    console.log('created person', person);

    // const res = await Person.deleteMany({ firstName: 'Abdur' });
    // console.log('deleted res', res);
  })
  .catch((e) => console.log(e))
  .finally(() => mongoose.connection.close());
