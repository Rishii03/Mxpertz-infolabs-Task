const Interview = require("../models/interview");

//view all interview
module.exports.allInterview = async (req, res) => {
    let interview = await Interview.find();
    console.log("view all interview");
    return;
  }
  //create an interview
module.exports.create = async (req, res) => {
      await Interview.create(req.body);
      console.log("create an interview");
      return;
    }
    //student interview
  module.exports.allocateStudent = async (req, res) => {
      const interview = await Interview.findById(req.params.interviewId);
      const student = await Student.findById(req.body.studentId);
      console.log("Student interview");
      return;
   }
  //view student interview 
  module.exports.interviewDetails = async (req, res) => {
      const students = await Student.find();
      console.log("view student interview");
      return;
    }
  