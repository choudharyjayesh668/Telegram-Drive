import { useState } from "react";
import axios from "axios";
import "../Css/Signup.css"
import { useNavigate } from "react-router-dom";
import SignupImage from "../assets/Signuprightdivimage.png"
export default function Signup(){
    const navigate = useNavigate();
    const [error,setError]=useState({
        emptyEmail:"",
        emptyUsername:"",
        emptypassword:"",
        emptycnfpassword:"",
        passwordmissmatchedError:"",
        existingEmail:"",
    });
    const [userData,setUserData]=useState({
        username:"",
        email:"",
        password:"",
        cnfpassword:""
    });
    const handleOnChange=(event)=>{
        setUserData((curruserData)=>{
            return{...curruserData,[event.target.name]:event.target.value}
        });
    };
    const handleOnSubmit=async(event)=>{
        try{
            event.preventDefault();

            setError({
                emptyEmail:"",
                emptyUsername:"",
                emptypassword:"",
                emptycnfpassword:"",
                passwordmissmatchedError:"",
                existingEmail:"",
            });
            let Error=false;
            const newError=({
                emptyEmail:"",
                emptyUsername:"",
                emptypassword:"",
                emptycnfpassword:"",
                passwordmissmatchedError:"",
                existingEmail:"",
            });
            if(!userData.email.trim()){
                newError.emptyEmail="Email Is Required";
                Error=true;
            };
            if(!userData.username.trim()){
                newError.emptyUsername="Username Is Required";
                Error=true;
            };
            if(!userData.password.trim()){
                newError.emptypassword="Password Is Required";
                Error=true;
            };
            if(!userData.cnfpassword.trim()){
                newError.emptycnfpassword="Confirm Password Is Required";
                Error=true;
            };
            if(userData.password && userData.cnfpassword && userData.password !== userData.cnfpassword){
                newError.passwordmissmatchedError="Password Do Not Match";
                Error=true;
            };
            
            if (Error) {
                setError(newError);
                return;
            }
            const response=await axios.post(
                "http://localhost:3000/signup",
                userData,
            );
            navigate("/login")
        }catch(err){
            console.log(err.response?.status);
            if (err.response?.status === 409) {
        setError({
            existingEmail: "User Already Exists",
        });
    }
        }
        // setError(newError);
    };
    return(
            <>
            <div className="signup-page">
    <div className="MainDiv">
        <div className="LeftDiv">
            <h2>
                <i className="fa-brands fa-telegram"></i>
                Telegram Drive
            </h2>
            <p className="desc">
                Join Telegram Drive and store, access
                <br />
                and share your files securely in the cloud.
            </p>
            <form onSubmit={handleOnSubmit}>
                {/* Username */}
                <div className="inputBox">
                    <i className="fa-regular fa-user"></i>
                    <input
                        type="text"
                        placeholder="Full Name"
                        name="username"
                        value={userData.username}
                        onChange={handleOnChange}
                    />
                </div>
                <p className="error">{error.emptyUsername}</p>
                {/* Email */}
                <div className="inputBox">
                    <i className="fa-regular fa-envelope"></i>
                    <input
                        type="email"
                        placeholder="Email Address"
                        name="email"
                        value={userData.email}
                        onChange={handleOnChange}
                    />
                </div>
                <p className="error">{error.emptyEmail}</p>
                {error.existingEmail && (
                <p className="error">{error.existingEmail}</p>
                )}
                {/* Password */}
                <div className="inputBox">
                    <i className="fa-solid fa-lock"></i>
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={userData.password}
                        onChange={handleOnChange}
                    />
                </div>
                <p className="error">{error.emptypassword}</p>
                {/* Confirm Password */}
                <div className="inputBox">
                    <i className="fa-solid fa-lock"></i>
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        name="cnfpassword"
                        value={userData.cnfpassword}
                        onChange={handleOnChange}
                    />
                </div>
                <p className="error">{error.emptycnfpassword}</p>
                <p className="error">
                    {error.passwordmissmatchedError}
                </p>
                <button type="submit">
                    Create Account
                </button>
            </form>
            <p className="switchAuth">
                Already have an account?{" "}
                <a href="/login">Sign in</a>
            </p>
            <p className="continueText">
                 or Continue with 
            </p>
            <div className="socialIcons">
                <i className="fa-brands fa-google"></i>
                <i className="fa-brands fa-telegram"></i>
                <i className="fa-brands fa-github"></i>
            </div>
            <p className="terms">
                By creating an account you agree to our{" "}
                <a href="#">Terms of Service</a> and{" "}
                <a href="#">Privacy Policy</a>.
            </p>
        </div>
        {/* RIGHT SIDE */}
        <div className="RightDiv">
            <img
                src={SignupImage}
                alt="Signup Illustration"
            />
            <h1>Your files go with you</h1>
            <p>
                Secure cloud storage that lets you access your files
                from anywhere, on any device, anytime.
            </p>
            <div className="features">
                <div className="feature">
                    <i className="fa-solid fa-cloud"></i>
                    <span>Access Anywhere</span>
                </div>
                <div className="feature">
                    <i className="fa-solid fa-people-group"></i>
                    <span>Easy Sharing</span>
                </div>
            </div>
        </div>
    </div>
    </div>
        </>
    )
}