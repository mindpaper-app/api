const router = require('express').Router();

router.use('/auth', require('./auth'));
router.use('/notes', require('./notes'));

module.exports = router;