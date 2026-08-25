import "../Css/Homepage.css";

export default function Homepage() {
    return (
        <div className="homepage-root">
            {/* Apple Frosted Navbar */}
            <nav className="navbar-wrapper">
                <div className="nav-brand">Telegram Drive</div>
                <div className="nav-actions">
                    <a href="/login" className="btn btn-secondary">Sign In</a>
                    <a href="/signup" className="btn btn-primary">Get Started</a>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="hero-section">
                <span className="hero-pill">
                    <i className="fa-solid fa-shield-halved"></i>
                    Private Cloud Infrastructure
                </span>
                <h1 className="hero-title">Your Files, Private by Default.</h1>
                <p className="hero-subtitle">
                    A minimal, ultra-fast cloud storage layer engineered directly on Telegram’s resilient global infrastructure.
                </p>
                <div className="hero-cta-row">
                    <a href="/signup" className="btn btn-primary">
                        <span>Get Started Free</span>
                        <i className="fa-solid fa-arrow-right"></i>
                    </a>
                    <a href="/login" className="btn btn-secondary">
                        <span>Existing User</span>
                    </a>
                </div>

                {/* macOS Finder Preview */}
                <div className="macos-window-mockup">
                    <div className="macos-titlebar">
                        <div className="window-dot dot-close"></div>
                        <div className="window-dot dot-min"></div>
                        <div className="window-dot dot-max"></div>
                        <span className="window-title">Telegram Drive — iCloud Vault</span>
                    </div>
                    <div className="macos-body">
                        <div className="macos-sidebar">
                            <span className="sidebar-label">Favorites</span>
                            <div className="sidebar-item active">
                                <i className="fa-solid fa-cloud"></i>
                                <span>All Files</span>
                            </div>
                            <div className="sidebar-item">
                                <i className="fa-solid fa-folder"></i>
                                <span>Documents</span>
                            </div>
                            <div className="sidebar-item">
                                <i className="fa-solid fa-image"></i>
                                <span>Media & Photos</span>
                            </div>
                        </div>
                        <div className="macos-content-grid">
                            <div className="mockup-item">
                                <i className="fa-solid fa-folder mockup-icon"></i>
                                <span className="mockup-label">Projects 2026</span>
                            </div>
                            <div className="mockup-item">
                                <i className="fa-solid fa-folder mockup-icon"></i>
                                <span className="mockup-label">Design Assets</span>
                            </div>
                            <div className="mockup-item">
                                <i className="fa-solid fa-folder mockup-icon"></i>
                                <span className="mockup-label">Keynotes & Docs</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Apple 3-Column Feature Matrix */}
            <section className="features-matrix">
                <div className="feature-apple-card">
                    <div className="feature-icon-circle">
                        <i className="fa-solid fa-lock"></i>
                    </div>
                    <h3>End-to-End Privacy</h3>
                    <p>Your files are routed through private encrypted Telegram channels. No third-party data tracking.</p>
                </div>
                <div className="feature-apple-card">
                    <div className="feature-icon-circle">
                        <i className="fa-solid fa-bolt"></i>
                    </div>
                    <h3>Instant Global Access</h3>
                    <p>High-speed stream delivery anywhere in the world across mobile, tablet, and macOS desktop.</p>
                </div>
                <div className="feature-apple-card">
                    <div className="feature-icon-circle">
                        <i className="fa-solid fa-cubes"></i>
                    </div>
                    <h3>Unlimited Scalability</h3>
                    <p>Zero monthly storage limits or subscriptions. Store documents, archives, and high-res media seamlessly.</p>
                </div>
            </section>
        </div>
    );
}
