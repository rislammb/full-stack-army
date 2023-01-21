const AdminAttendance = require('../models/AdminAttendance');

const findRunningAttendance = () => {
  return AdminAttendance.findOne({ status: 'RUNNING' });
};

const findAttendanceById = (id) => {
  return AdminAttendance.findById(id);
};

const createAdminAttendance = ({ timeLimit }) => {
  const adminAttendance = new AdminAttendance({ timeLimit: timeLimit ?? 5 });

  return adminAttendance.save();
};

module.exports = {
  findRunningAttendance,
  findAttendanceById,
  createAdminAttendance,
};
