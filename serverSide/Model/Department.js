const  mongoose =  require("mongoose");



const DepartmentSchema = new mongoose.Schema({
  name: { type: String, required: true },
   description : {type : String, required  :  true},
   });
   
   
   module.exports   = mongoose.model("departmentModel",DepartmentSchema);