const mongoose = require("mongoose")

const movieSchema = new mongoose.Schema({
    name:{type:String, required:true},
    actors:{type:Array, required:true},
    languages:{type:Array, required:true},
    directors:{type:Array, required:false},
    posters:{type:Array, required:false}
})

const movie = mongoose.model("movie",movieSchema)

module.exports = movie