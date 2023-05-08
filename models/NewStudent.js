const mongoose = require('mongoose')


const NewStudentSchema = new mongoose.Schema({
    surname: {type: String,required: true},
    firstname: {type: String,required: true},
   DOB: Date,
    gender: {type: String, enum: ['Male', 'Female']},
    fatherName: {type: String,required: true},
    fatherPhone:{type: Number},
    motherName: {type: String,required: true},
    motherPhone:{type: Number},
    picture:{data: Buffer, contentType: String}
})

const NewStudent = mongoose.model('newStudent', NewStudentSchema)

module.exports = NewStudent