const { addMinutes, isAfter } = require('date-fns');
const adminAttendanceService = require('../service/admin-attendance');
const studentAttendanceService = require('../service/student-attendance');
const error = require('../utils/error');

const getAttendance = async (req, res, next) => {
  const id = req.params.id;
  try {
    /**
     * step 1 - find admin attendance by id
     * step 2 - check if it is running or not
     * step 2 - check current time greater than end time or not
     * step 4 - check already register or not
     * step 5 - register entry
     */
    const adminAttendance = await adminAttendanceService.findAttendanceById(id);

    if (!adminAttendance) {
      throw error('Invalid Attendance Id', 400);
    }

    if (adminAttendance.status === 'COMPLETED') {
      throw error('Already completed!', 400);
    }

    const endTime = addMinutes(
      new Date(adminAttendance.createdAt),
      adminAttendance.timeLimit
    );
    if (isAfter(new Date(), endTime)) {
      adminAttendance.status = 'COMPLETED';
      await adminAttendance.save();
      throw error('Already completed!', 400);
    }

    let attendance = await studentAttendanceService.findAttendanceByIdAndUser(
      id,
      req.user._id
    );
    if (attendance) {
      throw error('Already attend!', 400);
    }

    attendance = await studentAttendanceService.createStudentAttendance(
      id,
      req.user._id
    );

    return res.status(201).json(attendance);
  } catch (e) {
    next(e);
  }
};

const getAttendanceStatus = async (_req, res, next) => {
  try {
    const running = await adminAttendanceService.findRunningAttendance();

    if (!running) {
      throw error('Not Running!', 400);
    }

    const endTime = addMinutes(new Date(running.createdAt), running.timeLimit);

    if (isAfter(new Date(), endTime)) {
      running.status = 'COMPLETED';
      await running.save();
      throw error('Not Running!', 400);
    }

    return res.status(200).json(running);
  } catch (e) {
    next(e);
  }
};

module.exports = {
  getAttendance,
  getAttendanceStatus,
};
