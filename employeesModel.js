const mongoose = require("mongoose");
const employeesSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unquie: true,
    },
    password: {
      type: String,
      required: true,
    },
    name: {
      type: String,
    },
  },
);
const employeesModel= mongoose.model("employees", employeesSchema);
module.exports = {employeesModel};
