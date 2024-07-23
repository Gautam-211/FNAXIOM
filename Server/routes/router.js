const express = require("express")
const router = express.Router()

const {createTask, deleteTask, updateTask, showAllTasks} = require("../controllers/Tasks");
const {login, signup} = require("../controllers/Auth");

const {auth} = require('../middlewares/auth');


//login and signup
router.post("/login",login);
router.post("/signup",signup);

//task routes
router.get("/showAllTasks",showAllTasks);
router.post("/createTask",auth,createTask);
router.post("/deleteTask",auth,deleteTask);
router.post("/updateTask",auth,updateTask);

module.exports = router
