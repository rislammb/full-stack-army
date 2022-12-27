const router = require('express').Router();
const {
  sellSingleTicket,
  sellBulkTicket,
  findAll,
  findById,
  findByUsername,
  updateById,
  updateByUsername,
  deleteById,
  deleteByUsername,
  drawWinners,
} = require('./controllers');

// router.get('/t/:id');
// router.put('/t/:id');
// router.delete('/t/:id');

router.get('/t/:id').get(findById).put(updateById).delete(deleteById);

router
  .route('/u/:username')
  .get(findByUsername)
  .put(updateByUsername)
  .delete(deleteByUsername);

router.post('/bulk', sellBulkTicket);
router.get('/draw', drawWinners);
router.route('/').get(findAll).post(sellSingleTicket);

module.exports = router;
