const  express  =  require("express");
const  router   = express.Router();


const UserController  =  require("../../Controller/UserController/Profile");

const  {verifyToken, isUser } = require("../../Middleware/authMiddleware");


router.get("/profile", verifyToken,isUser,UserController.getUserProfile);


module.exports  = router;