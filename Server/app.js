//express
const express = require("express");
const app = express();

//routes 
const routes = require("./routes/router")

//config functions
const dbConnect = require("./config/database");

//node package dependencies
const cookieParser = require("cookie-parser");
const cors = require("cors");

//env file config
require("dotenv").config();
const PORT = process.env.PORT || 4000;

//database connection
dbConnect();

//add middleware
app.use(express.json());
app.use(cookieParser());
app.use(
    cors({
        origin:"http://localhost:3000",
        credentials:true
    })
)

//mounting of routes
app.use("/api/v1", routes);

//default route
app.get("/", (req,res) => {
    return res.json({
        success:true,
        message:"Your server is up and running"
    })
})

//start the server
app.listen(PORT, () => {
    console.log(`App is running at PORT no. - ${PORT}`)
})