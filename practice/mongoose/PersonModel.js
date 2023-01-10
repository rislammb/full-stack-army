const mongoose = require('mongoose');

const citizenScema = new mongoose.Schema({
  idNumber: {
    type: Number,
    required: true,
  },
  dateOfBirth: Date,
});

const Citizen = new mongoose.model('Citizen', citizenScema);

const personSchema = new mongoose.Schema(
  {
    fristName: {
      type: String,
      required: true,
      index: true,
      trim: true,
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
      // get: (v) => v.toLowerCase(),
      // set: (v) => v.toLowerCase(),
      lowercase: true,
      unique: true,
      validate: {
        validator: function (v) {
          return v.endsWith('.com');
        },
        message: (props) => `${props.value} is not valid email!`,
      },
      // set alias for e
      alias: 'email',
    },
    // use nested schema
    citizen: citizenScema,
    // use referance of Citizen model
    citizenRef: { type: mongoose.ObjectId, ref: 'Citizen' },
    bio: {
      age: { type: Number, min: [10, 'Must be at least 10, got {VALUE}'] },
      single: { type: Boolean, default: true },
      gender: {
        type: String,
        enum: {
          values: ['Male', 'Female', 'Other'],
          message: '{VALUE} is not supperted for gender!',
        },
      },
    },
    certificates: [String],
    lastPass: { type: Date, default: Date.now },
    socialHandels: {
      type: Map,
      of: String,
    },
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
        return this.find({ firstName: new RegExp(name, 'i') });
      },
    },
    // query helpers: for query by frist name
    query: {
      byFristName(name) {
        return this.where({ firstName: new RegExp(name, 'i') });
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
