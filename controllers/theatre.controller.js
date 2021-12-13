const express = require("express")

const theatre = require("../models/theatre.model")

const authenticate = require("../middlewares/authenticate")

const router = express.Router()

router.post("/",authenticate,async(req,res)=>{
     try{
         const Theatre =await theatre.create(req.body)

         res.status(201).send(Theatre)
        }
        catch(e){
            res.status(500).json({status: e.message})
        }
})
router.get("/",authenticate,async(req,res)=>{
    try{
        const Theatre =await theatre.find().lean().exec()

        res.status(201).send(Theatre)
       }
       catch(e){
           res.status(500).json({status: e.message})
       }
})
module.exports = router
