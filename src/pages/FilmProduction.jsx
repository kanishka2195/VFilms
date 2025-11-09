import React from "react";
import { useNavigate } from "react-router-dom";
import BGImg from "../assets/BG.png";
import Film1 from "../assets/film1.png"; // Left-side image
import Service1 from "../assets/Service1.svg"; // Underline image
import Back from "../assets/Back.png"; // Top-left corner image
import Camera1 from "../assets/Camera 01.svg"; // Right-side camera images
import Camera2 from "../assets/Camera 02.svg";
import Camera3 from "../assets/Camera 03.svg";
import Camera4 from "../assets/Camera 04.svg"; // Bottom-left camera image
import Arrow from "../assets/arrow.svg"; // Bottom arrow image

export default function FilmProduction() {
  const navigate = useNavigate();

  // ✅ Navigation handlers
  const goBackToServices = () => navigate("/services");
  const goToBranding = () => navigate("/branding");

  return (
    <div
      style={{
        ...styles.container,
        backgroundImage: `url(${BGImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* ✅ Top-left Back button/image */}
      <img
        src={Back}
        alt="Back Button"
        style={styles.backButton}
        onClick={goBackToServices}
        className="cursor-pointer"
      />

      {/* ✅ Heading Text */}
      <h1 style={styles.heading}>
        "Filmmaking is a chance to live many lifetimes." – Robert Altman
      </h1>

      {/* ✅ Underline image */}
      <img src={Service1} alt="Underline" style={styles.underlineImage} />

      {/* ✅ Left-side Image */}
      <img src={Film1} alt="Film Side" style={styles.leftImage} />

      {/* ✅ Right-side Text Block */}
      <p style={styles.rightText}>
        Who says films are just an escape? <br />
        We see them as a way to live many lives – to feel, to explore, and to tell stories that stay. <br />
        And with each film, we carry new memories and new reasons to keep creating. <br /><br />
        <strong>V crafts:</strong> <br />
        • Documentaries <br />
        • Corporate Videos <br />
        • 2D Animation Videos <br />
        • 3D Animation Videos
      </p>

      {/* ✅ Explore Now Text */}
      <span
        style={styles.exploreText}
        onClick={goToBranding}
        className="cursor-pointer"
      >
        Explore Now
      </span>

      {/* ✅ Bottom arrow */}
      <img src={Arrow} alt="Arrow" style={styles.arrowImage} />

      {/* ✅ Right-side camera images */}
      <img src={Camera1} alt="Camera 1" style={styles.cameraRight1} />
      <img src={Camera2} alt="Camera 2" style={styles.cameraRight2} />
      <img src={Camera3} alt="Camera 3" style={styles.cameraRight3} />

      {/* ✅ Bottom-left camera image */}
      <img src={Camera4} alt="Camera 4" style={styles.cameraLeftBottom} />
    </div>
  );
}

// ✅ Inline CSS styles
const styles = {
  container: {
    width: "100%",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    position: "relative",
  },

  backButton: {
    position: "absolute",
    width: "105px",
    height: "48px",
    top: "160px",
    left: "210px",
    cursor: "pointer",
    opacity: 1,
    zIndex: 10,
  },

  underlineImage: {
    position: "absolute",
    top: "120px",
    left: "55%",
    transform: "translateX(-50%)",
    width: "920px",
    height: "45px",
    opacity: 1,
  },

  heading: {
    position: "absolute",
    width: "1000px",
    height: "50px",
    top: "110px",
    left: "300px",
    opacity: 1,
    fontFamily: "Halant, serif",
    fontWeight: 400,
    fontStyle: "normal",
    fontSize: "30px",
    lineHeight: "100%",
    textAlign: "center",
    color: "#000",
  },

  leftImage: {
    position: "absolute",
    width: "400px",
    height: "auto",
    left: "330px",
    top: "56%",
    transform: "translateY(-50%)",
    opacity: 1,
  },

  rightText: {
    position: "absolute",
    width: "360px",
    height: "300px",
    top: "200px",
    left: "750px",
    opacity: 1,
    fontFamily: "Instrument Sans, sans-serif",
    fontWeight: 400,
    fontStyle: "normal",
    fontSize: "18px",
    lineHeight: "28px",
    letterSpacing: "0%",
    color: "#000",
  },

  exploreText: {
    position: "absolute",
    width: "139px",
    height: "29px",
    top: "635px",
    left: "740px",
    opacity: 1,
    fontFamily: "Instrument Sans, sans-serif",
    fontWeight: 400,
    fontStyle: "normal",
    fontSize: "18px",
    lineHeight: "100%",
    textAlign: "center",
    color: "#000",
  },

  arrowImage: {
    position: "absolute",
    width: "100px",
    height: "auto",
    top: "655px",
    left: "750px",
  },

  cameraRight1: {
    position: "absolute",
    width: "115.1px",
    height: "141.09px",
    top: "140px",
    right: "160px",
  },
  cameraRight2: {
    position: "absolute",
    width: "93.5px",
    height: "165.94px",
    top: "580px",
    right: "180px",
  },
  cameraRight3: {
    position: "absolute",
    width: "113.31px",
    height: "141.09px",
    top: "420px",
    right: "320px",
  },

  cameraLeftBottom: {
    position: "absolute",
    width: "115.9px",
    height: "110.62px",
    bottom: "80px",
    left: "220px",
  },
};
