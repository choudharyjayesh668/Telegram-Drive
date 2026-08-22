const mongoose=require("mongoose");
const express=require("express");
require('dotenv').config();
const JWT= require("jsonwebtoken");
const bcrypt=require("bcryptjs");
const cookieParser=require("cookie-parser");
const cors=require("cors");
const Bot = require("node-telegram-bot-api");
const multer = require("multer");
const upload = multer({
    storage: multer.memoryStorage(),
});

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB connected");
    })
    .catch((err) => {
        console.log("MongoDB connection error:", err);
    });

const User=require("./models/user");
const IsLoggedIn=require("./middleware/IsLoggedIn");
const Folder=require("./models/folder");
const File = require("./models/file");
app.post("/signup",async(req,res)=>{
    try{
        const userData=req.body;
        let {email,password,username}=req.body;
        email=email.trim().toLowerCase();
        username = username.trim();
        const existingUser=await User.findOne({email});
        if (!username) {
            return res.json({
                message: "Username is Required",
            });
        }
        if(!email){
            return res.json({
                message:"Email is Required",
            });
        };
        if(!password){
            return res.json({
                message:"Password is Required",
            });
        }
        if(existingUser){
            return res.status(409).json({
                message:"User Already Exists",
            });
        };
        const hashPassword=await bcrypt.hash(password,10);
        const newUser=new User({
            username,
            email,
            password:hashPassword,
        });
        await newUser.save();
        res.json({
            message:"Data Received TO MongoDB"
        });
    }
    catch(err){
        res.json(err.message);
    }
});

app.post("/login",async(req,res)=>{
    try{
        let {email,password}=req.body;
        email = email.trim().toLowerCase();
        const existingUser=await User.findOne({email});
        if(!existingUser){
            return res.status(401).json({
                message:"Invalid Email or Password",
            });
        };
        const passwordMatch=await bcrypt.compare(password,existingUser.password);
        if(!passwordMatch){
            return res.status(401).json({
                message:"Invalid Email or Password"
            });
        };
        const token=JWT.sign(
            {userId:existingUser._id},
            process.env.JWT_SECRET,
            {expiresIn:"1d"}
        )
        res.cookie("token",token,{
            httpOnly:true,
            secure:false,    //TRUE in Production WiTH HTTPS
            sameSite: "lax",
            maxAge:24*60*60*1000
        });
        res.status(200).json({
            message:"Access Granted",
        });
    }catch(err){
        res.status(500).json({
            message: "Internal Server Error",
        });
    };
});

app.get("/dashboard",IsLoggedIn,(req,res)=>{
    res.status(200).json({
        message:"Welcome TO Homepage",
        userId:req.userId,
    });
});
app.post("/logout", (req, res) => {
    console.log("Logout Was Clicked By Frontend");
    res.clearCookie("token");
    res.status(200).json({
        message: "Logged Out Successfully",
    });
});

app.post("/createFolder",IsLoggedIn,async(req,res)=>{
    try{
        const folderdata=req.body;
        console.log(folderdata);
        console.log(req.userId);
        const newFolder=new Folder({
            folderName:folderdata.name,
            owner:req.userId,
        });
        await newFolder.save();
        res.status(201).json({
            message:"Folder Created",
        });
    }catch(err){
        res.status(500).json({
            message: err.message,
        });
    }
});
app.get("/folders",IsLoggedIn,async(req,res)=>{
    try{
        const userFolders=await Folder.find({owner:req.userId});
        // console.log(userFolders);
        res.status(200).json({
            message:"Folder Shown",
            data:userFolders,
        });
    }catch(err){
        res.status(500).json({
            message: err.message,
        });
    }
})
app.get("/folders/:id",IsLoggedIn,async(req,res)=>{
    try{
        const {id}=req.params;
        console.log(id);
    }catch(err){
        res.status(500).json({
            message: err.message,
        });
    };
});
app.post("/upload",IsLoggedIn,upload.single("file"),async(req,res)=>{
    const formdata=req.body;
    console.log(req.file); 
    console.log(formdata);
    res.status(200).json({
        message:"Data Uploaded"
    })
})
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});