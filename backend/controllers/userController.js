const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')



const registerUser = asyncHandler(async(req, res) => {
    const { firstName,lastName, phone, password } = req.body

    if (!firstName ||!lastName || !phone || !password) {
        res.status(400)
        throw new Error('Please add all fields')
    }
    //Check if user exists
    const userExists = await User.findOne({phone})
    if(userExists){
        res.status(400)
        throw new Error('User already exists')
    }
    //Hash password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    //Create User
    const user = await User.create({
        firstName,
        lastName,
        phone,
        password: hashedPassword
    })

    if(user){
        res.status(201).json({
            _id: user.id,
            firstName: user.firstName,
            phone: user.phone,
            token: generateToken(user._id)
        })
    }
    else{
        res.status(400)
        throw new Error('Invalid user data')
    }
})


const loginUser = asyncHandler(async(req, res) => {
    const { phone, password } = req.body

    //check for user phone
    const user = await User.findOne({phone})

    if(user && (await bcrypt.compare(password, user.password))){
        res.json({
            _id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            phone: user.phone,
            token: generateToken(user._id)

        })
    }else{
        res.status(400)
        throw new Error('Invalid credentials')
    }
})
// @desc Get  User data
// @route Get/api/users/me
//@access public
const getMe = asyncHandler(async(req, res) => {
    res.status(200).json(req.user)
})

//Generate JWT
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    })
}

module.exports = {
    registerUser,
    loginUser,
    getMe,
}