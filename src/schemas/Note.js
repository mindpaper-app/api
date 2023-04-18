const mongoose = require('mongoose')

const NoteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    tags: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tag'
    }],
    edited: {
        type: Date,
        default: Date.now
    },
    created: {
        type: Date,
        required: true,
        default: Date.now
    }
})

module.exports = mongoose.model('Note', NoteSchema)