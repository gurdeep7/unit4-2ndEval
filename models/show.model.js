const mongoose = require("mongoose")

const showSchema = new mongoose.Schema({
    timing:{type:String, required:true},
    movie:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"movie",
        req:true
    },
    total_seats:{type:Number, required:true},
    screen:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"screen",
        req:true
    },
})

const show = mongoose.model("show",showSchema)

module.exports = show