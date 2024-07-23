const jwt = require("jsonwebtoken");
require("dotenv").config();

//auth
exports.auth = async(req,res,next) => {
    try {
        const token = req.cookies.token || req.body.token || req.header("Authorization").replace("Bearer ","")

        if (!token){
            return res.status(401).json({
                success:false,
                message:"Token is missing"
            })
        }

        try {
            const decode = jwt.verify(token,process.env.JWT_SECRET);
            req.user = decode;
            
        } catch (error) {
            return res.status(401).json({
                success:false,
                message:"Token is invalid"
            })
        }

        next();
        
    } catch (error) {
        console.log(error.message);
        console.error(error);
        return res.status(500).json({
            success:false,
            message:"Internal server error",
            error:error.message
        })
    }
}