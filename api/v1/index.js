const express = require('express');
const router = express.Router();

router.use('/anime', require('./anime'))

module.exports = router;