import { motion } from "framer-motion";
import "../Css/Homepage.css";

export default function Homepage() {
    return (
        <div className="homepage-root">
            {/* Navbar */}
            <nav className="navbar-wrapper">
                <div className="nav-brand">Telegram Drive</div>
                <div className="nav-actions">
                    <a href="/login" className="btn btn-secondary">Sign In</a>
                    <a href="/signup" className="btn btn-primary">Get Started</a>
                </div>
            </nav>

            {/* Hero */}
            <section className="hero-section">
                <div className="hero-content">
                    <h1 className="hero-title">Your Files, Private by Default.</h1>
                    <p>A fast, secure storage layer built on Telegram infrastructure.</p>
                    <br />
                    <a href="/signup" className="btn btn-primary">Get Started</a>
                </div>
                <div className="hero-visual">
                    {/* Abstract visualization */}
                </div>
            </section>

            {/* Trust Section */}
            <section className="section-question">
                <h2 className="section-title">Why trust us?</h2>
                <p>Because we don't own your data. We only provide the pipeline.</p>
            </section>
        </div>
    );
}
