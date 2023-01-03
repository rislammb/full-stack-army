const router = require('express').Router();
const {
  sellTicket,
  buyTicket,
  findAll,
  findById,
  findByUsername,
  updateById,
  updateByUsername,
  deleteById,
  deleteByUsername,
  drawWinners,
} = require('./viewControllers');

router.route('/t/:id').get(findById).post(updateById);
router.post('/t/:id/delete', deleteById);

router.route('/u/:username').get(findByUsername).post(updateByUsername);
router.post('/u/:username/delete', deleteByUsername);

router.route('/buy').get(buyTicket).post(sellTicket);
router.get('/draw', drawWinners);
router.route('/').get(findAll);

module.exports = router;
