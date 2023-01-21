const StudentAttendance = require('../models/StudentAttendance');

const findAttendanceByIdAndUser = (attendanceId, userId) => {
  return StudentAttendance.findOne({
    adminAttendance: attendanceId,
    user: userId,
  });
};

const createStudentAttendance = (attendanceId, userId) => {
  const studentAttendance = new StudentAttendance({
    adminAttendance: attendanceId,
    user: userId,
  });

  return studentAttendance.save();
};

module.exports = { findAttendanceByIdAndUser, createStudentAttendance };
