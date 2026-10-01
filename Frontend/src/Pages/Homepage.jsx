import "../Css/Homepage.css";
import { useState } from "react";
export default function Homepage() {
    const [showPopup, setShowPopup] = useState(true);

  const goToJDrive = () => {
    window.location.href = "https://j-drive.vercel.app";
  };
    return (
           <div className="migration-overlay">
      <div className="migration-popup">

        <h2>Telegram Drive has moved</h2>

        <p>
          Telegram Drive has been discontinued and replaced by{" "}
          <strong>J-Drive</strong>.
        </p>

        <p className="migration-subtext">
          Visit J-Drive to continue using our file storage platform.
        </p>

        <button className="migration-button" onClick={goToJDrive}>
          Go to J-Drive →
        </button>
      </div>
    </div>
    );
}
