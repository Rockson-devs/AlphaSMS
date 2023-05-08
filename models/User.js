const mongoose = require('mongoose')
const bcrypt = require('bcrypt')


const UserSchema = new mongoose.Schema({
    surname: {type: String,required: true},
    firstname: {type: String,required: true},
    DOB: Date,
    gender:{ type: String,  enum: ['Male', 'Female']},
    email: {type: String,required: true},
    password: {type: String,required: true},
    Cpassword: {type: String,required: true},
});

// middleware to hash password with bcrypt
UserSchema.pre('save', function (next){
    const user = this

    bcrypt.hash(user.password,10,(error, hash)=>{
        user.password = hash
        next()
    })
})

const User = mongoose.model('User', UserSchema);

module.exports = User