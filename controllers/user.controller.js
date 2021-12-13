const express = require("express")

const user = require("../models/user.model")

const upload = require("../middlewares/upload")

const jwt = require("jsonwebtoken")

const newToken = (User) =>{
    return jwt.sign({User: User}, process.env.JWT_ACCESS_KEY)
}
const router = express.Router()
const authenticate = require("../middlewares/authenticate")
router.post("/", upload.single("profile_img"), async(req,res)=>{
    try{
        const User = await user.create({
            name:req.body.name,
    email:req.body.email,
    password:req.body.password,
    profile_img:req.file.path,
    roles:req.body.roles
        })
        const token = newToken(user);
        res.status(201).json({User,token})
    }catch(e){
        
res.status(500).json({status: e.message})
    }
})

module.exports = router