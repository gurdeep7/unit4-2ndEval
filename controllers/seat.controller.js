const express = require("express")

const seat = require("../models/seat.model")

const authenticate = require("../middlewares/authenticate")

const router = express.Router()

router.post("/",authenticate,async(req,res)=>{
     try{
         const Seat =await seat.create(req.body)

         res.status(201).send(Seat)
        }
        catch(e){
            res.status(500).json({status: e.message})
        }
})
router.get("/",authenticate,async(req,res)=>{
    try{
        const Seat =await seat.find().lean().exec()

        res.status(201).send(Seat)
       }
       catch(e){
           res.status(500).json({status: e.message})
       }
})
module.exports = router
