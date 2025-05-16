const  express  =  require("express");
const  router   = express.Router();

//
const EmployeeController = require("../../Controller/AdminController/Empolyee");



// ADD Form 

router.post("/employee",EmployeeController.EmpoyeeForm);



module.exports  = router;


