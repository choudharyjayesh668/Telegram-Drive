const mongoose = require("mongoose");

const fileSchema=new mongoose.Schema({
    fileName:{
        type:String,
        required:true,
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required: true,
    },
    folder:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Folder",
        required: true,
    },
},
    {
        timestamps: true,
    }
);

const File=mongoose.model("File",fileSchema);
module.exports=File;