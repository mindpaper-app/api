const router = require('express').Router();
const controller = require('../controllers/authController')
const { checkUser } = require('../utils/middleware')

router.post('/login', controller.login)
router.post('/register', controller.register)
router.get('/user', checkUser, controller.getUser)

module.exports = router;