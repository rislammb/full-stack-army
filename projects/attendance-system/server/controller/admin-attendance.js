const { addMinutes, isAfter } = require('date-fns');
const adminAttendanceService = require('../service/admin-attendance');
const error = require('../utils/error');

const getEnable = async (_req, res, next) => {
  try {
    const running = await adminAttendanceService.findRunningAttendance();

    if (running) {
      throw error('Already Running!', 400);
    }

    const attendance = await adminAttendanceService.createAdminAttendance({});
    return res.status(201).json({ message: 'Success', attendance });
  } catch (e) {
    next(e);
  }
};

const getStatus = async (_req, res, next) => {
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

const getDisable = async (_req, res, next) => {
  try {
    const running = await adminAttendanceService.findRunningAttendance();

    if (!running) {
      throw error('Not Running!', 400);
    }

    running.status = 'COMPLETED';
    await running.save();

    return res.status(200).json(running);
  } catch (e) {
    next(e);
  }
};

module.exports = {
  getEnable,
  getStatus,
  getDisable,
};
