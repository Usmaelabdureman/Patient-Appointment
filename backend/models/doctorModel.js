
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    
    fullName: {
        type: String,
        required:true,
    },
    phone: {
        type:String,
        required:true,
        unique:true
    },
    bio:{
        type:String,
        required:true,
    },
    profileImg: {
        type: String,
        required:true,
    }
}
)
module.exports = mongoose.model('doctors', userSchema);