const router = require('express').Router();
const controller = require('../controllers/notesController')
const { checkUser } = require('../utils/middleware')

router.get('/all', checkUser, controller.getAllNotes)
router.get('/:id', checkUser, controller.getNote)
router.post('/create', checkUser, controller.createNote)
router.post('/save/:id', checkUser, controller.updateNote)

module.exports = router;