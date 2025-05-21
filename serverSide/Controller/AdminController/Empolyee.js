// FOR Sql  

// const connection = require('../../config/db');  // adjust the path accordingly

// const EmpoyeeForm = async (req, res) => {
//   try {
//     const {
//       name,
//       email,
//       employeeId,
//       gender,
//       department,
//       salary,
//       role,
//       designation,
//       password,
//     } = req.body;

//     const query = `
//       INSERT INTO employees (name, email, employeeId, gender, department, salary, role, designation, password)
//       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
//     `;

//     connection.query(
//       query,
//       [name, email, employeeId, gender, department, salary, role, designation, password],
//       (error, results) => {
//         if (error) {
//           console.error("Error inserting employee:", error);
//           return res.status(500).json({
//             success: false,
//             error: "Database insertion error",
//           });
//         }
//         return res.status(200).json({
//           success: true,
//           message: "Employee data saved successfully",
//           data: results,
//         });
//       }
//     );
//   } catch (error) {
//     console.error("Form submission error:", error);
//     res.status(500).json({
//       success: false,
//       error: error.message || "Unknown error occurred",
//     });
//   }
// };

// module.exports = {
//   EmpoyeeForm,
// };










// const EmployeeAdminSchema  = require("../../Model/Empoyee");



// const EmpoyeeForm =  async(req,res)=>{
//     try {
     

//      const  form  =   new EmployeeAdminSchema(req.body);
//     //  console.log("form  of employee  Daat had  been",form);
//      await form.save();
//      res.status(200).json({
//           success: true,
//           message  :"Employee Form had  been  saved successFully"
//      });
//     // } catch (error) {
//     //     res.status(404).json({
//     //          error:"Error  occur during form submittion"
//     //     })
//     // }
//     } catch (error) {
//   console.error("Form submission error:", error);  // 👈 log it
//   res.status(500).json({
//     success: false,
//     error: error.message || "Unknown error occurred",
//   });
// }

// };




// module.exports ={
//       EmpoyeeForm,
// }




const EmployeeAdminSchema  = require("../../Model/Empoyee");


const multer = require("multer");

// Use memory storage to keep image in RAM (we store it in MongoDB directly)
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });


const EmployeeForm = async (req, res) => {
  try {
    const { name, email, employeeId, gender, department, salary, role, designation, password } = req.body;

    const form = new EmployeeAdminSchema({
      name,
      email,
      employeeId,
      gender,
      department,
      salary,
      role,
      designation,
      password,
      picture: req.file
        ? {
            data: req.file.buffer,
            contentType: req.file.mimetype,
          }
        : undefined,
    });

    await form.save();

    res.status(200).json({
      success: true,
      message: "Employee Form had been saved successfully",
    });
  } catch (error) {
    console.error("Form submission error:", error);
    res.status(500).json({
      success: false,
      error: error.message || "Unknown error occurred",
    });
  }
};


const  GetEmployeeData  =  async(req,res)=>{
      try {
         
const GetFormData  =  await  EmployeeAdminSchema.find();
           res.status(200).json({
               success :  true,
               data  : GetFormData,
               message :"Form Data had  been successFully get" 
           })   

      } catch (error) {
          res.status(404).json({
                error :" Error occur  during getting Data ",    
          })
      }
}


//  /getemployee/:id'     
const GetEmployeeDataId = async(req,res)=>{
         try {
          const employeeId = req.params.id;
  const  employeeData  =  await  EmployeeAdminSchema.findById(employeeId);
       
     if(!employeeData){
          res.status.json({ message :"Employee had  been  not founded"})
     }

  res.status(200).json({   
      success : true,
      data : employeeData,
    })
  } catch (error) {
    console.error('Error fetching employee by ID:', error);
    res.status(500).json({ success: false, message: 'Server Error' });
    
         }
} 

// Edit Empoyee Form Data 

   
const  EditEmployeeData  =  async(req,res)=>{
    try {
  const id = req.params.id;

    console.log(`Id:`, id);
       
      const UpdateForm = await EmployeeAdminSchema.findByIdAndUpdate(id, req.body ,{ new: true });
       res.status(200).json({
          success : true,
           message :"Empoyee  Form had  been  updated successFully",
           data : UpdateForm,
        }) 

    } catch (error) {
         console.error("Error  EdIt employee data")
      res.status(500).json({
                 success : false,
                 message :"Server Error",
            })
    }
}







module.exports ={
    EmployeeForm,
    GetEmployeeData,
    GetEmployeeDataId,
    EditEmployeeData,
}
