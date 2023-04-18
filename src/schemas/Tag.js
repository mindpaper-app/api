const mongoose = require('mongoose');

const TagSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    emoji: {
        type: String,
        required: false,
    }
})

module.exports = mongoose.model('Tag', TagSchema);