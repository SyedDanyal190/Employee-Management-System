const EmployeeAdminSchema  = require("../../Model/Empoyee");



const EmpoyeeForm =  async(req,res)=>{
    try {
        
     const  form  =   new EmployeeAdminSchema(req.body);
     await form.save();
     res.status(200).json({
          success: true,
          message  :"Employee Form had  been  saved successFully"
     });
    } catch (error) {
        res.status(404).json({
             error:"Error  occur during form submittion"
        })
    }

};



module.exports ={
      EmpoyeeForm,
}