const { model, Schema } = require('mongoose');

const studentAttendanceSchema = new Schema({
  adminAttendance: {
    type: Schema.Types.ObjectId,
    ref: 'AdminAttendance',
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  createdAt: {
    type: Date,
    default: new Date(),
    required: true,
  },
});

const StudentAttendance = model('StudentAttendance', studentAttendanceSchema);
module.exports = StudentAttendance;
