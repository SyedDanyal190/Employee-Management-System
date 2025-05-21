const  express  =  require("express");
const  router   = express.Router();

const EmployeeController = require("../../Controller/AdminController/Empolyee");
const  DepartmentController  =  require("../../Controller/AdminController/Department");


const multer = require("multer");


const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// const { verifyToken } = require("../../Middleware/Auth");
// const { onlyAdmin, allowAdminOrSelf } = require("../../Middleware/Authorization");




// Empoyee Route
 // Route to handle form + picture (Add Form)
router.post("/employee", upload.single("picture"), EmployeeController.EmployeeForm);
// Add get
router.get("/getemployee",EmployeeController.GetEmployeeData);
// get by ID
 router.get("/getemployeeView/:id",EmployeeController.GetEmployeeDataId );
//  Edit
router.put("/editemployeeForm/:id",EmployeeController.EditEmployeeData);

//Department  Route 

// Add
router.post("/addepartment", DepartmentController.AddDepartmentForm);
// Get
router.get("/getdepartment", DepartmentController.GetDepartmentForm);
// Get By Id
router.get("/getdepartment/:id",DepartmentController.GetDepartmentFormById);
// Edit  
router.put("/editdepartment/:id",DepartmentController.EditDepartmentForm);
// Delete
router.delete("/deletedepatment/:id",DepartmentController.DeleteDepartmentForm);






// Add form
// router.post("/employee",EmployeeController.EmpoyeeForm);

module.exports  = router;


