const Tasks = require("../models/Tasks");
const User = require("../models/User");
require("dotenv").config();


exports.createTask = async(req,res) => {
    try {
        const {title, description} = req.body;
        const userId = req.user.id;

        if(!title || !description){
            res.status(400).json({
                success:false,
                message:"Fill all the required details"
            })
        }

        const user = await User.findById(userId);
        if(!user){
            res.status(400).json({
                success:false,
                message:"The user does not exist"
            })
        }

        //create the task
        const task = await Tasks.create({
            title,description,
            user:userId
        })

        return res.status(200).json({
            success:true,
            message:"Task created succesfully",
            data:task
        })
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success:false,
            message:"Internal server error",
            error:error.message
        })
    }
}


//API for task deletion
exports.deleteTask = async(req,res) => {
    try {
        const {taskId} = req.body;

        const task = await Tasks.findById(taskId);
        if (!task){
            return res.status(400).json({
                success:false,
                message:"Task does not exist"
            })
        }

        //delete the task
        await Tasks.findByIdAndDelete(taskId);

        return res.status(200).json({
            success:true,
            message:"Task deleted successfully"
        })
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success:false,
            message:"Internal server error",
            error:error.message
        })
    }
}


//get all tasks
exports.showAllTasks = async(req,res) => {
    try {
        const tasks = await Tasks.find();

        return res.status(200).json({
            success:true,
            message:"All tasks fetched successfully",
            data:tasks
        })
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success:false,
            message:"Internal server error",
            error:error.message
        })
    }
}


//update a task
exports.updateTask = async(req,res) => {
    try {
        const {taskId, title, description} = req.body;

        const task = await Tasks.findById(taskId);
        if (!task){
            return res.status(400).json({
                success:false,
                message:"Task does not exist"
            })
        }

        if (title){
            task.title = title;
        }
        if (description){
            task.description = description;
        }

        const updatedTask = await Tasks.findByIdAndUpdate(taskId,{
            title:task.title,
            description:task.description
        },{new:true})

        return res.status(200).json({
            success:true,
            message:"Task updated successfully",
            data:updatedTask
        })
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success:false,
            message:"Internal server error",
            error:error.message
        })
    }
}