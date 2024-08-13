const mongoose = require("mongoose")

const todoSchema = new mongoose.Schema({
    title:{
        required: true,
        type: String,
        trim:true
    },
    description:{
        type:String,
        required:false
    }
})

module.exports = mongoose.model("ToDo",todoSchema)