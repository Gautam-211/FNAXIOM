const mongoose = require("mongoose");

const TasksSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim:true
    },
    description:{
        type:String,
        required:true,
        trim:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }

    },{timestamps:true}  //automatically adds timestamps for createdAt and updatedAt

)

module.exports = mongoose.model("Tasks",TasksSchema);