const mongoose = require("mongoose")

const seatSchema = new mongoose.Schema({
    show:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"show",
        req:true
}
})
const seat = mongoose.model("seat",seatSchema)

module.exports = seat