
const SignUpSigma  =  require("../../Model/SignUp");






const  getUserProfile = async (req, res) => {
  try {
    const userId = req.user.id; // populated by auth middleware
     console.log("UserId",userId)
    const user = await SignUpSigma.findById(userId).select("-password"); // don't send password

    if (!user) return res.status(404).json({ message: "User not found" });

    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};


module.exports  =  { getUserProfile };