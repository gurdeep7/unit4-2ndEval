require("dotenv").config()

const jwt = require("jsonwebtoken")

const user = require("../models/user.model")

const newToken = (User) =>{
    return jwt.sign({User: User}, process.env.JWT_ACCESS_KEY)
}



const signin = async (req, res) => {
    try {
    
      let User = await user.findOne({ email: req.body.email });
  
      
      if (!User)
        return res.status(400).json({
          status: "failed",
          message: " Please provide correct email address and password 1",
        });
  
     
      const match = await User.checkPassword(req.body.password);
  
      
      if (!match)
        return res.status(400).json({
          status: "failed",
          message: " Please provide correct email address and password 2",
        });
  
     
      const token = newToken(User);
  
    
      res.status(201).json({ User, token });
    } catch (e) {
      return res.status(500).json({ status: "failed", message: e.message });
    }
  };
  
module.exports=signin