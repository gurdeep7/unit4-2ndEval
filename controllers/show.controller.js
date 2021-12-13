const express = require("express")

const shows = require("../models/show.model")

const authenticate = require("../middlewares/authenticate")

const router = express.Router()

router.post("/",authenticate,async(req,res)=>{
     try{
         const Shows =await shows.create(req.body)

         res.status(201).send(Shows)
        }
        catch(e){
            res.status(500).json({status: e.message})
        }
})
router.get("/",authenticate,async(req,res)=>{
    try{
        const Shows =await shows.find().lean().exec()

        res.status(201).send(Shows)
       }
       catch(e){
           res.status(500).json({status: e.message})
       }
})
module.exports = router
