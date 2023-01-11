const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    firstName: {
        type:String,
        required : [true, "name required"]
    },
    lastName: {
        type:String,
        required : [true, "Enter your last Name"]
    },
    phone: {
        type:String,
        required : [true, "phone is required"],
        unique: true
    },
    password: {
        type:String,
        required : [true, "password is not empty"]
    },
},{
    timestamps: true
})

module.exports = mongoose.model('User', userSchema)