const mongoose = require('mongoose')

const NoteSchema = new mongoose.Schema({
    body: {
        type: String,
        required: true
    },
    edited: {
        type: Date,
        default: Date.now
    },
    created: {
        type: Date,
        required: true,
        default: Date.now
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    tags: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tag'
    }]
})

module.exports = mongoose.model('Note', NoteSchema)