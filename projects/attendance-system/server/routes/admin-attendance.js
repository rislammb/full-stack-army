const router = require('express').Router();
const {
  getEnable,
  getDisable,
  getStatus,
} = require('../controller/admin-attendance');

router.get('/enable', getEnable);
router.get('/status', getStatus);
router.get('/disable', getDisable);

module.exports = router;
