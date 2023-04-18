const User = require('../schemas/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const JWT_SECRET = process.env.JWT_SECRET

const login = async(req, res) => {
    const { username, password } = req.body
    if(!username || !password) return res.status(400).json({ message: 'Fill all fields!' })

    try {
        const existingUser = await User.findOne({ username })
        if (!existingUser) return res.status(400).json({ message: 'Invalid username or password!' })

        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password)
        if (!isPasswordCorrect) return res.status(400).json({ message: 'Invalid username or password!' })

        const token = jwt.sign({ id: existingUser._id }, JWT_SECRET, { expiresIn: '6h' })

        res.status(200).json({
            message: 'Logged in successfully!',
            token
        })
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong!' })
    }
}

const register = async(req, res) => {
    const { username, password } = req.body
    if(!username || !password) return res.status(400).json({ message: 'Fill all fields!' })

    try {
        const existingUser = await User.findOne({ username })
        if (existingUser) return res.status(400).json({ message: 'Username is taken!' })

        const hashedPassword = await bcrypt.hash(password, 12)
        const result = await User.create({ username, password: hashedPassword })

        res.status(200).json({
            message: 'Created account successfully!',
        })
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong!' })
    }
}

const getUser = async(req, res) => {
    const user = req.user

    res.status(200).json({
        id: user._id,
        username: user.username,
    })
}

module.exports = {
    login,
    register,
    getUser
}