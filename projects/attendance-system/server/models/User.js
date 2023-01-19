const { model, Schema } = require('mongoose');

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    minLength: [3, 'Name at least 3 characters long!'],
    maxLength: [35, 'Name maximum 35 characters long!'],
  },
  email: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          v
        );
      },
      message: (props) => `${props.value} is invalid email!`,
    },
  },
  password: {
    type: String,
    minLength: [6, 'Password at least 6 characters long!'],
    required: true,
  },
  roles: {
    type: [String],
    required: true,
    default: ['STUDENT'],
  },
  accountStatus: {
    type: String,
    enum: ['PENDING', 'ACTIVE', 'REJECTED'],
    default: 'PENDING',
    required: true,
  },
});

const User = model('User', userSchema);
module.exports = User;
