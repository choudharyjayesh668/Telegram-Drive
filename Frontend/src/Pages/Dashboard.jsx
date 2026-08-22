import axios from "axios"
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import "./DashBoard.css";
import folderImage from "../assets/folder.png";
export default function Dashboard(){
    const navigate = useNavigate();
    
    const [foldercreation,setFolderCreation]=useState({
            name:"",
        });
    const [createdFolder,setCreatedFolder]=useState([]);
    const Logout=async()=>{
        console.log("Logout clicked");
        try{
            const response=await axios.post(
            "http://localhost:3000/logout",
            {},
            {
                withCredentials: true,
            }
        );
        console.log(response.data);
            navigate("/login");
        }catch(err){
            console.log(err);
        }
    };
    const handleOnChange=(event)=>{
        setFolderCreation((currFolder)=>{
            return{...currFolder,[event.target.name]:event.target.value}
        });
    };
    const handleCreateFolder=async(event)=>{
        event.preventDefault();
        try{
            const response=await axios.post(
                "http://localhost:3000/createFolder",
                foldercreation,
                {
                    withCredentials:true,
                }
            );
            console.log("Success");
            setFolderCreation({
                name: "",
            });
            await fetchFolders();
        }catch(err){
            console.log(err);
            console.log(err.response);
            console.log(err.response?.data);
        }
    };
    const fetchFolders=async()=>{
            const response=await axios.get(
            "http://localhost:3000/folders",
            {
                withCredentials:true,
            },
        );
        setCreatedFolder(response.data.data);
        console.log(response.data.data)
        };
    useEffect(()=>{
        fetchFolders();
    },[]);
    const onClickFolder=async(id)=>{
        console.log(`Folder Click on ID:= ${id}`);
        // console.log(responce.data);
        navigate(`/folders/${id}`)
        
    }
    return(
        <>
            <h1>Welcome To HomePage</h1>
            <button onClick={Logout}>Logout</button><br /><br /><br />
            <form onSubmit={handleCreateFolder}>
                <input
                    type="text"
                    placeholder="Folder Name"
                    name="name"
                    value={foldercreation.name}
                    onChange={handleOnChange} 
               />
                <button type="submit">Create Folder</button>
            </form>
                {
                   <div className="folders-container">
                        {createdFolder.map((folder) => (
                            <div className="folder-card" key={folder._id} onClick={()=>onClickFolder(folder._id)}>
                                <img src={folderImage} alt="Folder" className="folder-image" />
                                <p>{folder.folderName}</p>
                            </div>
                        ))}
                    </div>
                }
                
        </>
    )
}