const mongoose = require('mongoose')
const URI = process.env.MONGO

const connect = () => {
    mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err))
}

module.exports = connect