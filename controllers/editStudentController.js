const NewStudent = require('../models/NewStudent')

module.exports = async (req, res)=>{
    const oneStudent = await NewStudent.findById(req.params.id)

            // show a tooltip with a message of success after successful entry into database
        res.render('#editStudentdetails')
        // {oneStudent : oneStudent} )
}


//     const NewStudent = require('../models/NewStudent')

// module.exports = async (req, res)=>{  // add async to this line of code to be able to use await also make the end point /studentdetails/:id
   
//     const oneStudent = await NewStudent.findById(req.params.id)
    
//     res.render('studentdetails', {
//         oneStudent :oneStudent
//     })
//     console.log(oneStudent)
    
// };