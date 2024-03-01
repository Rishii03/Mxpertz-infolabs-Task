const Student = require("../models/student");
//view all students
module.exports.allStudents = async (req, res) => {
    const students = await Student.find();
    console.log( "view all students");
   }
// create a student
module.exports.create = async (req, res) => {
    await Student.create(req.body);
    console.log("create a student")
  }


   

          
        