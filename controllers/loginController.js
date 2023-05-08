const bcrypt = require('bcrypt')
const User = require('../models/User')
const NewStudent = require('../models/NewStudent')


//login and check if user exists in the datat base.after that compare the hasned passwords with the password provided before  alowing for the all students page to opwn

module.exports = async (req, res)=>{
    const allstudents = await NewStudent.find({})
    const {email, password} = req.body;

    User.findOne({email:email}, (error, user)=>{
        if(user){
            bcrypt.compare(password, user.password,(error, same)=>{
                if(same){
                        console.log(`${req.session.userId = user._id} is the new user`);
                        res.render('allstudents', {
                        allstudents : allstudents})
                }else{
                    res.redirect('/')
                }
            })
        } else{
            res.redirect('/')
        }
    })
}