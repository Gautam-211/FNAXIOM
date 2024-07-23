const User = require("../models/User");
const bcrypt = require("bcrypt");
const JWT = require("jsonwebtoken");
require("dotenv").config();
const validator = require("validator");


exports.signup = async(req,res) => {
    try {
        const {firstName,lastName,email,password,confirmPassword} = req.body;

        if (!firstName || !lastName || !email || !password || !confirmPassword){
            return res.status(403).json({
                success:false,
                message:"Please fill all the required fields first"
            })
        }

        //Check whether the password and confirm password field match or not 
        if (password !== confirmPassword){
            return res.status(400).json({
                success:false,
                message:"password and confirmPassword does not match each other"
            })
        }

        //check whether the entered email is valid or not
        if (!validator.isEmail(email)) {
            return res.status(401).json({
                success:false,
                message:"Invalid email Address"
            });
        }

        //check whether user already exists
        const existingUser = await User.findOne({email});

        if (existingUser){
            return res.status(401).json({
                success:false,
                message:"User already exists with this email"
            })
        }

        //otp is correct , now hash the password to store it
        const hashedPassword = await bcrypt.hash(password, 10);

        //create entry in DB
        const user = await User.create({
            firstName,lastName,email,
            password:hashedPassword
        })

        return res.status(200).json({
            success:true,
            message:"Account was created successfully",
            user
        })
        
    } catch (error) {
        console.log(error.message);
        console.error(error);
        res.status(500).json({
            success:false,
            message:"Internal server error",
            error:error.message
        })
    }
}


//login
exports.login = async(req,res) => {
    try {
        //get data from otp
        const {email,password} = req.body;

        //perform validations
        if(!email || !password){
            return res.status(403).json({
                success:false,
                message:"Fill all the details first"
            })
        }

        if (!validator.isEmail(email)) {
            return res.status(401).json({
                success:false,
                message:"Invalid email Address"
            });
        }

        //check if user does not exist in the database
        const existingUser = await User.findOne({email});

        if (!existingUser){
            return res.status(401).json({
                success:false,
                message:"User does not exits , go to signUp page"
            })
        }
        
        //check password and generate a JWT token
        if (await bcrypt.compare( password, existingUser.password)){

            const payload = {
                email:existingUser.email,
                id:existingUser._id,
            }

            const token = JWT.sign(payload, process.env.JWT_SECRET,{
                expiresIn:"2h"
            })

            existingUser.token = token;
            existingUser.password = undefined;

            //set options for cookie
            const options = {
                expires: new Date(Date.now() + 3*24*60*60*1000),
                httpOnly:true
            }

            //create a cookie
            res.cookie("token",token,options).status(200).json({
                success:true,
                message:"Login was scuccessfull",
                user:existingUser,
                token
            })
        }
        else{
            return res.status(400).json({
                success:false,
                message:"Password is incorrect"
            })
        }
        
    } catch (error) {
        console.log(error.message);
        console.error(error);
        res.status(500).json({
            success:false,
            message:"Internal server error",
            error:error.message
        })
    }
}