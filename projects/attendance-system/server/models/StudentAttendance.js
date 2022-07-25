const { model, Schema } = require('mongoose');

const studentAttendanceSchema = new Schema({
  adminAttendance: {
    type: Schema.Types.ObjectId,
    ref: 'AdminAttendance'
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  createdAt: Date
});

const StudentAttendance = model('StudentAttendance', studentAttendanceSchema);
module.exports = StudentAttendance;