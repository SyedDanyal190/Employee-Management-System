const DepartmentSchema = require("../../Model/Department");


const AddDepartmentForm  = async(req,res)=>{
    try {
        const deptForm  = new DepartmentSchema(req.body); 
         await  deptForm.save();
         res.status(200).json({
                success : true,
                message :"DeptForm had  been  successfully  submitted"   
         })  

    } catch (error) {
        console.error("Error occur during addDept Form")
          res.status(500).json({
              success : false,
              message :"Error occur  in sever "
          })
    }
} 


const GetDepartmentForm =  async(req,res)=>{
    try {
       const getDeptForm  =  await  DepartmentSchema.find();
        res.status(200).json({
              success  : true,
              message : "DeptForm data  had  been  successFully got",
              data  : getDeptForm,
            })
   } catch (error) {
       console.error("Error  occur during gettimg deptfrom Data ");
        res.status(500).json({
               success  :  false,
               message : "Error during Server"  ,
              
        })
   }

}


const GetDepartmentFormById  = async(req,res)=>{
   try {

     const  id  =  req.params.id;
     const  getDeptFormId  =  await   DepartmentSchema.findById(id);

     if(!getDeptFormId){
            return res.status(404).json({success :false , message  :"Department no found"});
            
     }

     res.status(200).json({
           success:true,
           data :  getDeptFormId,
     }); 
    }catch (error) {
    console.error("Error fetching department by ID", error);
    res.status(500).json({ success: false, message: "Server error" });
  }

};



const EditDepartmentForm    =  async(req,res)=>{
        try {
     const id = req.params.id; 
        const  updateDeptForm   =  await DepartmentSchema.findByIdAndUpdate(id, req.body, {new :  true});  
   res.status(200).json({
        success : true,
        message :"DeptForm  had  been edit  successFully",
        data : updateDeptForm,
   })
            } catch (error) {
                 console.error("Error  occur  during EditDept form")
         res.status(500).json({
            success : false,
            message  :"Error occur in  server "
         })
                
        }
} 



const  DeleteDepartmentForm  =  async(req,res)=>{
        try {
          const id = req.params.id;
           const delDeptForm  =  await   DepartmentSchema.findByIdAndDelete(id);
          res.status(200).json({
              success  : true,
              message : "DeptForm had  been deleted  successFully",
              data : delDeptForm,  
          })               
        } catch (error) {
             res.status(500).json({
                 success  : false, 
                message : "Error occur during server",
             }) 
        }
}



module.exports = {
     AddDepartmentForm,
     GetDepartmentForm,
     GetDepartmentFormById,
     EditDepartmentForm,
     DeleteDepartmentForm,
}