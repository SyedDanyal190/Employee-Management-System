const  express  =  require("express");
const  router   = express.Router();

const EmployeeController = require("../../Controller/AdminController/Empolyee");

const multer = require("multer");


const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// const { verifyToken } = require("../../Middleware/Auth");
// const { onlyAdmin, allowAdminOrSelf } = require("../../Middleware/Authorization");





 // Route to handle form + picture (Add Form)
router.post("/employee", upload.single("picture"), EmployeeController.EmpoyeeForm);

// Add get

router.get("/getemployee",EmployeeController.GetEmployeeData);

// get by ID
 router.get("/getemployeeView/:id",EmployeeController.GetEmployeeDataId );








// Add form
// router.post("/employee",EmployeeController.EmpoyeeForm);

module.exports  = router;


