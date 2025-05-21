const  mongoose =  require("mongoose");



const EmployeeAdminSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  employeeId: { type: String, required: true},
  gender: { type: String, required: true },
  department: { type: String, required: true },
  salary: { type: String, required: true },
  role: { type: String, required: true },
  designation: { type: String, required: true },
  password: { type: String, required: true },
  description : {type : String, required  :  true},
 picture: {
    data: Buffer,
    contentType: String,
  },
});


module.exports   = mongoose.model("employeeadmin",EmployeeAdminSchema);