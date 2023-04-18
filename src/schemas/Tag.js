const mongoose = require('mongoose');

const TagSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    }
})

module.exports = mongoose.model('Tag', TagSchema);