
import "../Css/Homepage.css"
import Homepageimg from "../assets/Homepage.png"
export default function Homepage(){
    return(
        <>
            <div className="Navbar">
                <div className="left">
                    <i className="fa-brands fa-telegram logo"></i>
                    <p>Telegram Drive</p>
                </div>
                <div className="middle">
                    <a href="#">Feature</a>
                    <a href="#">How it Works</a>
                    <a href="#">Contact</a>
                </div>
                <div className="right">
                    <a href="/login">Login</a>
                    <a href="/signup">Create Account</a>
                </div>
            </div>
            <div className="hero">
    <div className="heroleft">
        <h1>
            Your Files... <br />
            Secured by Telegram
        </h1>

        <p>
            Telegram Drive helps you store, access and share your
            <br />
            files securely in the cloud using your own Telegram storage.
        </p>

        <button>
            Get Started
            <i className="fa-solid fa-arrow-right"></i>
        </button>
    </div>

    <div className="heroright">
        <img src={Homepageimg} alt="Telegram Drive" />
    </div>
</div>
<div className="footer">
    <p>Get in Touch With Developer</p>

    <a href="https://www.instagram.com/jayeshchoudhayy/" target="_blank" rel="noopener noreferrer">
        <i className="fa-brands fa-instagram"></i>
        Instagram
    </a>

    <a href="mailto:jayeshchoudhary9503@gmail.com">
        <i className="fa-regular fa-envelope"></i>
        Gmail
    </a>

    <a href="https://t.me/Jayesh_choudhayy" target="_blank" rel="noopener noreferrer">
        <i className="fa-brands fa-telegram"></i>
        Telegram
    </a>

    <a href="https://github.com/choudharyjayesh668" target="_blank" rel="noopener noreferrer">
        <i className="fa-brands fa-github"></i>
        GitHub
    </a>

    <a href="https://www.linkedin.com/in/jayesh-choudhary-8b7201360/" target="_blank" rel="noopener noreferrer">
        <i className="fa-brands fa-linkedin"></i>
        LinkedIn
    </a>
</div>
        </>
    )
}