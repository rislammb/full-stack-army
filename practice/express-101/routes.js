const router = require('express').Router();
const { aboutController, helpController } = require('./controller');

router.get('/about', aboutController);

router.get('/help', helpController);

module.exports = router;
