const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        trim:true
    },
    lastName:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true
    },
    password:{
        type:String,
        required:true,
    },
    tasks:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Tasks"
    }]
    
    },{timestamps:true}  //automatically adds timestamps for createdAt and updatedAt

)

module.exports = mongoose.model("User",userSchema);