const mongoose = require("mongoose");
const studentSchema = new mongoose.Schema(
  {
    name: String, 
    batch: String, 
    College: String, 
    status: String, 
    DSA: Number, 
    Web: Number, 
    React: Number,
  }
);
const studentModel = mongoose.model(Student, studentSchema);
module.exports = {studentModel}