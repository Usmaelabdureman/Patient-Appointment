const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    name: {
        type:String,
        required : [true, "name required"]
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