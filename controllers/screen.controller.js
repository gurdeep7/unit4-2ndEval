const express = require("express")

const screens = require("../models/screen.model")

const authenticate = require("../middlewares/authenticate")

const router = express.Router()

router.post("/",authenticate,async(req,res)=>{
     try{
         const Screens =await screens.create(req.body)

         res.status(201).send(Screens)
        }
        catch(e){
            res.status(500).json({status: e.message})
        }
})
router.get("/",authenticate,async(req,res)=>{
    try{
        const Screens =await screens.find().lean().exec()

        res.status(201).send(Screens)
       }
       catch(e){
           res.status(500).json({status: e.message})
       }
})
module.exports = router
