require('dotenv').config()
const express = require('express');
const cors = require('cors')

if(!process.env.MONGO) return console.log('No mongo url provided')

const app = express();
const port = process.env.PORT || 3002;

require('./utils/mongo')()

app.use(cors({
    origin: '*',
    methods: ['GET', 'POST'],
}))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', require('./routes'))

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})
