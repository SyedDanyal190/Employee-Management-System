const express = require("express");
const router  = express.Router();

const signFormController  =  require("../Controller/FormController");




//Register User
router.post("/registerUsers",signFormController.registerUsers);
//Login User
router.post("/logInUsers",signFormController.loginUsers)







module.exports = router;

