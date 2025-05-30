const  express  =  require("express");
const  router   = express.Router();

const EmployeeController = require("../../Controller/AdminController/Empolyee");
const  DepartmentController  =  require("../../Controller/AdminController/Department");


const multer = require("multer");


const storage = multer.memoryStorage();
const upload = multer({ storage: storage });


const { isAdmin,verifyToken  }      =  require("../../Middleware/authMiddleware")


// Empoyee Route
 // Route to handle form + picture (Add Form)
router.post("/employee",verifyToken,isAdmin, upload.single("picture"), EmployeeController.EmployeeForm);
// Add get
router.get("/getemployee", verifyToken,isAdmin, EmployeeController.GetEmployeeData);
// get by ID
 router.get("/getemployeeView/:id", verifyToken,isAdmin, EmployeeController.GetEmployeeDataId );
//  Edit
router.put("/editemployeeForm/:id" ,verifyToken,isAdmin, EmployeeController.EditEmployeeData);

//Department  Route 

// Add
router.post("/addepartment",  verifyToken,isAdmin,  DepartmentController.AddDepartmentForm);
// Get
router.get("/getdepartment", verifyToken,isAdmin,  DepartmentController.GetDepartmentForm);
// Get By Id
router.get("/getdepartment/:id",  verifyToken,isAdmin,  DepartmentController.GetDepartmentFormById);
// Edit  
router.put("/editdepartment/:id", verifyToken,isAdmin,  DepartmentController.EditDepartmentForm);
// Delete
router.delete("/deletedepatment/:id", verifyToken,isAdmin,  DepartmentController.DeleteDepartmentForm);






// Add form
// router.post("/employee",EmployeeController.EmpoyeeForm);

module.exports  = router;


