const mongoose = require("mongoose")
const interviewSchema = new mongoose.Schema({
  companyName: String,
  date: Date,
  student: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student",
    },
  ],
});