const express = require('express'),
    multer = require('multer'),
    mongoose = require('mongoose'),
    uuidv4 = require('uuid/v4'),
    doctorRouter = express.Router();

const User = require('../models/doctorModel');

const DIR = './public';

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, DIR);
    },
    filename: (req, file, cb) => {
        const fileName = file.originalname.toLowerCase().split(' ').join('-');
        cb(null, uuidv4() + '-' + fileName)
    }
});
var upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        if (file.mimetype == "image/png" ||
            file.mimetype == "image/jpg" || 
            file.mimetype == "image/jpeg" ||  
            file.mimetype == "image/svg") {
            cb(null, true);
        } else {
            cb(null, false);
            return cb(new Error('Only .png, .jpg and .jpeg .svg format allowed!'));
        }
    }
});

doctorRouter.post('/', upload.single('profileImg'), (req, res, next) => {
    User.findOne({phone:req.body.phone}).then((user)=>{
        if (user){
            return res.status(400).json({phone:"User already registered."})
        }else{
            const url = req.protocol + '://' + req.get('host')
            const user = new User({
                _id: new mongoose.Types.ObjectId(),
                fullName: req.body.fullName,
                phone:req.body.phone,
                bio:req.body.bio,
                profileImg: url + '/public/' + req.file.filename
            });
            user.save().then(result => {
                res.status(201).json({
                    message: "User registered successfully!",
                    userCreated: {
                        _id: result._id,
                        fullName:result.fullName,
                        phone:result.phone,
                        bio:result.bio,
                        profileImg: result.profileImg
                    }
                })
            }).catch(err => {
                console.log(err),
                    res.status(500).json({
                        error: err
                    });
            })

        }
    })
   
    
});
doctorRouter.get("/doctors", (req, res, next) => {
    User.find().then(data => {
        res.status(200).json({
            message: "User list retrieved successfully!",
            users: data
        });
    });
});
module.exports=doctorRouter;