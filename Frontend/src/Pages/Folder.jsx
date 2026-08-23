import { useState } from "react"
import axios from 'axios'
import { useParams } from "react-router-dom";
import { useEffect } from "react";

export default function Folder(){
    const [files,setFiles]=useState([]);
    const { id } = useParams();
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
                `http://localhost:3000/upload/${id}`,
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
    const fetchFiles=async()=>{
        console.log("fetchFiles called");
        const response=await axios.get(
            `http://localhost:3000/folders/${id}/files`,
            {
                withCredentials:true,
            },
        );
        setFiles(response.data.data);
        console.log(response.data.data);
    }
    const handleView = async (fileId) => {
    const response = await axios.get(
        `http://localhost:3000/files/${fileId}/view`,
        {
            withCredentials: true,
        }
    );

    window.open(
    `http://localhost:3000/files/${fileId}/view`,
    "_blank"
);
    };
    const handleDownload = (fileId) => {
        window.open(
            `http://localhost:3000/files/${fileId}/download`,
            "_blank"
        );
    };
    const handleDelete = async (fileId) => {
        const confirmDelete = window.confirm(
            "Are you sure you want to delete this file?"
        );

        if (!confirmDelete) return;

        try {
            await axios.delete(
                `http://localhost:3000/files/${fileId}`,
                {
                    withCredentials: true,
                }
            );

            await fetchFiles();

        } catch (err) {
            console.error(err);
        }
    };
    useEffect(()=>{ 
        fetchFiles();
    },[]);
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
            {
                files.map((file) => (
                    <div key={file._id}>
                        <p onClick={() => handleView(file._id)}>
                            {file.fileName}
                        </p>
                        <a
                            href={`http://localhost:3000/files/${file._id}/download`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Download
                        </a>
                        <button onClick={() => handleDelete(file._id)}>
    Delete
</button>
                    </div>
                ))
            }
        </>
    )
}