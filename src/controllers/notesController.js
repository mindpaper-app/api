const Note = require('../schemas/Note')

const getAllNotes = async (req, res) => {
   const { user } = req
   const notes = await Note.find({ owner: user._id })
   res.status(200).json(notes)
}

module.exports = {
   getAllNotes,
}
