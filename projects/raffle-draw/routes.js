const router = require('express').Router();
const { sellSingleTicket, sellBulkTicket } = require('./controllers');

// router.get('/t/:id');
// router.put('/t/:id');
// router.delete('/t/:id');

router.get('/t/:id').get().put().delete();

router.route('/u/:username').get().put().delete();

router.post('/bulk', sellBulkTicket);
router.get('/draw');
router.route('/').get().post(sellSingleTicket);

module.exports = router;
