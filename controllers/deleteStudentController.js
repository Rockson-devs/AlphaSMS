const NewStudent = require('../models/NewStudent')

module.exports = async(req, res) =>{
    console.log(req.params.id);
   const oneStudent = await NewStudent.findByIdAndDelete(req.params.id);
   console.log(`Deleted : ${oneStudent}`);
   //rendering the user page without the deleted entry
   const allstudents = await NewStudent.find({})
   res.render('allstudents', {
    allstudents : allstudents})
}