const User = require('../schemas/User')
const jwt = require('jsonwebtoken')

const JWT_SECRET = process.env.JWT_SECRET

const checkUser = async(req, res, next) => {
    if(!req.headers.authorization) return res.status(400).json({ message: 'Unauthorized' })
    const token = req.headers.authorization.split(' ')[1]
    if (!token) return res.status(400).json({ message: 'Unauthorized' })

    try {
        const decodedData = jwt.verify(token, JWT_SECRET)
        const userID = decodedData.id

        const existingUser = await User.findById(userID)
        if (!existingUser) return res.status(400).json({ message: "User doesn't exist" })

        req.user = existingUser
        next()
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Something went wrong!' })
    }
}

module.exports = {
    checkUser
}