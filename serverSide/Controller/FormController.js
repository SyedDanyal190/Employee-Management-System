const SignUpSigma  =  require("../Model/SignUp");

const bcrypt  =  require("bcrypt");
const jwt    = require("jsonwebtoken");

const  registerUsers = async(req,res)=>{
   try {
const hashedPassword =  await  bcrypt.hash(req.body.password,10);

    
    const Form =  new SignUpSigma({
      ...req.body,
      password : hashedPassword , 
    })
     

await Form.save();
res.status(200).json({
     success : true,
    message :"Form had  been submitted  successFully"
})
   } catch (error) {
        res.status(404).json({
            error :"Error  of  form submitting"  
        })    
   }
};





const loginUsers = async (req, res) => {
    try {
      console.log("Login request body:", req.body);
  
      const { email, password } = req.body;
      const user = await SignUpSigma.findOne({ email });
      console.log("Found user:", user);
  
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
  
      const isMatch = await bcrypt.compare(password, user.password);
      console.log("Password match:", isMatch);
  
      if (!isMatch) {
        return res.status(401).json({ error: "Wrong credentials" });
      }
  
      // const token = jwt.sign({ id: user._id }, 'mySecretkey', { expiresIn: '1h' });
      const token = jwt.sign({ id: user._id, role: user.role },'mySecretkey',    { expiresIn: '1h' });
      
  
      return res.status(200).json({
        message: "Login successfully done",
        token,
      });
  
    } catch (error) {
      console.error("Login error:", error);
      return res.status(500).json({
        error: "Server error during login",
      });
    }
  };
  





module.exports = {

    registerUsers,
    loginUsers,
    
}

