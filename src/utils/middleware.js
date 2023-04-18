const User = require('../schemas/User')
const jwt = require('jsonwebtoken')

const JWT_SECRET = process.env.JWT_SECRET

const checkUser = async(req, res, next) => {
    if(!req.headers.authorization) return res.status(400).json({ message: 'Brak autoryzacji!' })
    const token = req.headers.authorization.split(' ')[1]
    if (!token) return res.status(400).json({ message: 'Brak autoryzacji!' })

    try {
        const decodedData = jwt.verify(token, JWT_SECRET)
        const userID = decodedData.id

        const existingUser = await User.findById(userID)
        if (!existingUser) return res.status(400).json({ message: 'Uzytkownik nie istnieje!' })

        req.user = existingUser
        next()
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Coś poszło nie tak!' })
    }
}

module.exports = {
    checkUser
}