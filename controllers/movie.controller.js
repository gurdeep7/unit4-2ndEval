const express = require("express")

const movie = require("../models/movie.model")

const upload = require("../middlewares/upload")

const authenticate = require("../middlewares/authenticate")

const router = express.Router()

router.post("/",upload.any("poster"), async(req,res)=>{
    filePaths = req.files.map(file => file.path)
    try{
        const Movie = await movie.create({
            name:req.body.name,
    actors:req.body.actors,
    languages:req.body.languages,
    directors:req.body.directors,
    posters:filePaths
        })
        res.status(201).send(Movie)
    }catch(e){
        
res.status(500).json({status: e.message})
    }
})

router.get("/", authenticate,async(req,res)=>{
    try{
        const movies = await movie.find().lean().exec()
        res.status(201).send(movies)
    }catch(e){
        res.status(500).json({status: e.message})
    }
})
module.exports = router