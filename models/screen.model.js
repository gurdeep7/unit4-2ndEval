const mongoose = require("mongoose")

const screenSchema = new mongoose.Schema({
    name:{type:String, required:true},
    theatre:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"theatre",
        req:true
}
})
const screen = mongoose.model("screen",screenSchema)

module.exports = screen