const { model, Schema } = require('mongoose');

const adminAttendanceSchema = new Schema(
  {
    timeLimit: {
      type: Number,
      required: true,
      min: 5,
      max: 30,
      default: 5,
    },
    status: {
      type: String,
      required: true,
      enum: ['RUNNING', 'COMPLETED'],
      default: 'RUNNING',
    },
  },
  { timestamps: true }
);

const AdminAttendance = model('AdminAttendance', adminAttendanceSchema);
module.exports = AdminAttendance;
