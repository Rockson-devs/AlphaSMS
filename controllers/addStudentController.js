const NewStudent = require('../models/NewStudent')

module.exports = async (req, res)=>{
        NewStudent.create(req.body),(error, newstudent)=>{
            console.log(error, newstudent)
        }
        const allstudents = await NewStudent.find({})
            // show a tooltip with a message of success after successful entry into database
        res.render('allstudents', {
            allstudents : allstudents})
    }


// const allstudents = await NewStudent.find({})
//         console.log(req.session);   
//         res.render('allstudents', {
//             allstudents : allstudents})
//         console.log(allstudents)