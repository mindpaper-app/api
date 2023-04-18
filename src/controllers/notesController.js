const Note = require('../schemas/Note')

const getAllNotes = async (req, res) => {
   const { user } = req
   const notes = await Note.find({ owner: user._id })
   res.status(200).json(notes)
}

const getNote = async (req, res) => {
   const { user } = req
   const { id } = req.params
   const note = await Note.findOne({ _id: id, owner: user._id })
   if (!note) return res.status(404).json({ message: 'Note not found' })
   res.status(200).json(note)
}

const createNote = async (req, res) => {
   const { user } = req
   const { title, content } = req.body
   const note = await Note.create({
      title,
      body: content,
      owner: user._id,
   })
   res.status(201).json(note)
}

const updateNote = async (req, res) => {
   const { user } = req
   const { id } = req.params
   const { title, content } = req.body

   const note = await Note.findOne({ _id: id, owner: user._id })
   if (!note) return res.status(404).json({ message: 'Note not found' })

   note.title = title
   note.body = content
   await note.save()

   res.status(200).json(note)
}

module.exports = {
   getAllNotes,
   createNote,
   getNote,
   updateNote,
}
