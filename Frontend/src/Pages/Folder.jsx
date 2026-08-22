import { useState } from "react"
import axios from 'axios'
export default function Folder(){
    const [selectedfile,setSelectedFile]=useState(null);
    const handleFileChange=(event)=>{
        const files=(event.target.files[0]);
        console.log(files);
        setSelectedFile(files);
    }
    const handleUpload=async ()=>{
        const formData = new FormData();
        formData.append("file",selectedfile);
        try{
            const response=await axios.post(
                "http://localhost:3000/upload",
                formData,
                {
                    withCredentials:true,
                }
            )
            console.log(response.data);
        }catch(err){
            console.log(err);
        }
    }
    return(
        <>
            <button onClick={() => document.getElementById("fileInput").click()}>
                Upload File
            </button>

            <input
                id="fileInput"
                type="file"
                hidden
                onChange={handleFileChange}
            />
            <button onClick={handleUpload}>
                Upload
            </button>
        </>
    )
}