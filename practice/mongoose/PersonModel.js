const mongoose = require('mongoose');

const personSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      minLength: [3, 'Minimum 3 characters long!'],
      maxLength: [10, 'Minimum 10 characters long!'],
    },
    lastName: {
      type: String,
      required: true,
      minLength: [3, 'Minimum 3 characters long!'],
      maxLength: [10, 'Minimum 10 characters long!'],
    },
    e: {
      type: String,
      get: (v) => v.toLowerCase(),
      set: (v) => v.toLowerCase(),
      validate: {
        validator: function (v) {
          return v.endsWith('.com');
        },
        message: (props) => `${props.value} is not valid email!`,
      },
      // set alias for e
      alias: 'email',
    },
    bio: { age: { type: Number, min: 10 }, single: Boolean },
  },
  {
    // instance methods: for find similar frist name
    methods: {
      findSimilarFirstName(cb) {
        return mongoose.model('Person').find({ firstName: this.firstName }, cb);
      },
    },
    // statics: for find by frist name
    statics: {
      findByFristName(name) {
        return this.find({ firstName: new RegExp(name, 'ig') });
      },
    },
    // query helpers: for query by frist name
    query: {
      byFristName(name) {
        return this.where({ firstName: new RegExp(name, 'ig') });
      },
    },
    // virtuals: for get and set fullname
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
    // set createdAt and updatedAt
    timestamps: true,
  }
);

const Person = mongoose.model('Person', personSchema);
module.exports = Person;
