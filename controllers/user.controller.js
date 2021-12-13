const express = require("express")

const user = require("../models/user.model")

const upload = require("../middlewares/upload")

const router = express.Router()

router.post("/",upload.single("profile_img"), async(req,res)=>{
    try{
        const User = await user.create({
            name:req.body.name,
    email:req.body.email,
    password:req.body.password,
    profile_img:req.body.path,
    roles:req.body.roles
        })
        res.status(201).json({status:e.message})
    }catch(e){
res.status(500).json({status:e.meassage})
    }
})
module.exports = router