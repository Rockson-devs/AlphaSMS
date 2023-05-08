const NewStudent = require('../models/NewStudent')

module.exports = async(req, res)=>{ // add async to this line of code to be able to use await
        const allstudents = await NewStudent.find({})  
        console.log(allstudents) 
        res.render('allstudents', {
            allstudents : allstudents});
        
    // get specific properties of all students added to database to display on frontend and dispaly
    // res.render("allstudents", {
    //     allstudents
    }