// const mongoose = require('mongoose')
   


// const User = require('../models/doctorModel')


// // 
// const addDoctors=((req, res, next) => {
//     User.findOne({phone:req.body.phone}).then((user)=>{
//         if (user){
//             return res.status(400).json({phone:"User already registered."})
//         }else{
//             const url = req.protocol + '://' + req.get('host')
//             const user = new User({
//                 _id: new mongoose.Types.ObjectId(),
//                 fullName: req.body.fullName,
//                 phone:req.body.phone,
//                 bio:req.body.bio,
//                 profileImg: url + '/public/' + req.file.filename
//             });
//             user.save().then(result => {
//                 res.status(201).json({
//                     message: "User registered successfully!",
//                     userCreated: {
//                         _id: result._id,
//                         fullName:result.fullName,
//                         phone:result.phone,
//                         bio:result.bio,
//                         profileImg: result.profileImg
//                     }
//                 })
//             }).catch(err => {
//                 console.log(err),
//                     res.status(500).json({
//                         error: err
//                     });
//             })

//         }
//     })
   
    
// });
// // router.get("/user-profile", (req, res, next) => {
// //     User.find().then(data => {
// //         res.status(200).json({
// //             message: "User list retrieved successfully!",
// //             users: data
// //         });
// //     });
// // });
// module.exports = addDoctors;