import { useState } from "react";
import axios from "axios";
import "../Css/Signup.css"
import { useNavigate } from "react-router-dom";
import SignupImage from "../assets/Signuprightdivimage.png"
export default function Login(){
    const navigate = useNavigate();
    const [error,setError]=useState({
        emptyEmail: "",
        emptyPassword: "",
        loginError: "",
    });
    const [userData,setUserData]=useState({
        email:"",
        password:"",
    });
    const handleOnChange=(event)=>{
        setUserData((curruserData)=>{
            return{...curruserData,[event.target.name]:event.target.value}
        });
    };
    const handleOnSubmit=async(event)=>{
        event.preventDefault();
        try{
            setError({
                emptyEmail: "",
                emptyPassword: "",
                loginError: "",
            });
            let Error=false;
            const newError=({
                emptyEmail:"",
                emptypassword:"",
                loginError:"",
            });
            if(!userData.email.trim()){
                newError.emptyEmail="Email Is Required";
                Error=true;
            };
            if(!userData.password.trim()){
                newError.emptypassword="Password Is Required";
                Error=true;
            };
            
            const response=await axios.post(
                "http://localhost:3000/login",
                userData,
                {
                    withCredentials:true,
                }
            );
                navigate("/Dashboard");
        }catch(err){
            if (err.response?.status === 401) {
        setError({
            emptyEmail: "",
            emptyPassword: "",
            loginError: "Invalid Email or Password",
            });
            }
        }
    }
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
                            <p className="error">{error.emptyPassword}</p>
                            <p className="error">{error.loginError}</p>
                            <button type="submit">
                                Login Account
                            </button>
                        </form>
                        <p className="switchAuth">
                            Don't have an account?{" "}
                            <a href="/signup">Create account</a>
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
                            By Logging in to an account you agree to our{" "}
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