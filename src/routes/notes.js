const router = require('express').Router();
const controller = require('../controllers/notesController')
const { checkUser } = require('../utils/middleware')

router.get('/all', checkUser, controller.getAllNotes)
// router.post('/save', checkUser, controller.saveNote)

module.exports = router;